import { Injectable, BadRequestException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Direccion } from '../direccion/entities/direccion.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { DireccionRestaurante } from '../direccionrestaurante/entities/direccionrestaurante.entity';
import { MetodoPago } from 'src/metodopago/entities/metodopago.entity';
import { Plato } from 'src/plato/entities/plato.entity';
import { DetallePedido } from 'src/detallepedido/entities/detallepedido.entity';
import { Descuento } from 'src/descuento/entities/descuento.entity';
import { Pedido } from './entities/pedido.entity';
import { randomUUID } from 'crypto';
import { UpdateEstadoDto } from './dto/update-estado.dto';


// pedido delivery, se separo la logica de pedido retiro en local para mayor claridad

@Injectable()
export class PedidoService {
  constructor(private readonly dataSource: DataSource) {}
  
  async create(createPedidoDto: CreatePedidoDto) {
    if (!createPedidoDto.items?.length) throw new BadRequestException('El carrito está vacío'); // validamos que no este vacio el carrito

    return await this.dataSource.transaction(async (manager) => {
      
      // confirmar que el usuario existe
      const usuario = await manager.findOneByOrFail(Usuario,{ usuarioID: createPedidoDto.usuarioId });
      if (!usuario) throw new NotFoundException('Usuario no encontrado'); // el chat dice que con findOneByOrFail ya tira excepcion, pero por las dudas

      // confirmar que la direccion existe y pertenece al usuario
      const direccion = await manager.findOne(Direccion, {
        where: { direccionID: createPedidoDto.direccionId },
        relations: ['usuario'],
      });
      if (!direccion) throw new NotFoundException('Dirección no encontrada');
      if (direccion.usuario?.usuarioID !== createPedidoDto.usuarioId) {
        throw new BadRequestException('La dirección no pertenece al usuario');
      }

      // confirmar que la direccion del restaurante exista
      const direccionRestaurante = await manager.findOneByOrFail(
        DireccionRestaurante,
        { direccionRestauranteID: createPedidoDto.direccionRestauranteId }
      );

      // confirmamos metodo de pago, 
      const metodoPago = await manager.findOne(MetodoPago, {
        where: { metodoPagoID: createPedidoDto.metodoPagoId },
        relations: ['usuario'],
      });
      if (!metodoPago || metodoPago.usuario?.usuarioID !== createPedidoDto.usuarioId) {
        throw new BadRequestException('Método de pago inválido para este usuario');
      }

      // confirmamos que los platos existan usando el items en el dto
      const idsPlatos = [...new Set(createPedidoDto.items.map(i => i.platoId))]; // usamos Set para evitar ids repetidos, esto no sabia que funcionaba asi me lo tiro el chat como recomendacion
      const platos = await manager.find(Plato, {
        where: idsPlatos.map(id => ({ platoID: id })),
      }); // obtenemos los platos de la base de datos

      if (platos.length !== idsPlatos.length) {
        throw new BadRequestException('Hay platos inexistentes en el carrito'); // si platos cant != idsPlatos cant, es porque alguno no existia
      }
      const cantPorPlato = new Map(createPedidoDto.items.map(i => [i.platoId, i.cantidad])); // esto lo mapea para usarlo despues, mapear significa crear una estructura de datos que relacione platoId con cantidad

      // IMPORTANTE calculo de totales, descuentos, etc
      // 
      const detalles: DetallePedido[] = []; // array donde vamos a ir guardando los detalles de pedido, para luego mandarlos a guardar
      let subtotal = 0;                     // subtotal antes de descuentos y envio

      for (const plato of platos) { // traemos cada plato que vino de la base de datos
        const cantidad = cantPorPlato.get(plato.platoID)!; //
        const precioBase = Number(plato.precio);
        const descPlato = Number(plato.porcentajeDescuento ?? 0); 
        const precioConDescPlato = precioBase * (1 - descPlato / 100);

        const detalle = manager.create(DetallePedido, {
          plato,
          cantidad,
          precioUnitario: precioConDescPlato,
          subtotal: Number((precioConDescPlato * cantidad).toFixed(2)),
        });

        subtotal += detalle.subtotal;
        detalles.push(detalle); // guardamos el detalle en el array
      }

      const descuentoPedido = await manager.findOneByOrFail(Descuento, {
        codigo: createPedidoDto.codigoDescuento,
        activo: true,
      });
      let valorDescuentoPedido = 0;
      
      const now = new Date();
      if (descuentoPedido.fechaInicio > now || descuentoPedido.fechaFin < now) {
        throw new BadRequestException('El descuento no está vigente');
      }

        // tipo tiene textual lo que esta en la base de datos, a lo mejor hay otra forma no tan rustica, pero por ahora lo dejo asi
        // por ej 2x1, descuentopedido.valor = 50.00
        if (descuentoPedido.tipo === 'Porcentaje') {
          valorDescuentoPedido = Number(((subtotal * Number(descuentoPedido.valor)) / 100).toFixed(2)); // suptotal * porcentaje / 100 , lo que nos guarda el descuento en pesos par descontar al final
        } else if (descuentoPedido.tipo === 'Fijo') {
          valorDescuentoPedido = Number(Math.min(subtotal, Number(descuentoPedido.valor)).toFixed(2)); // La línea de código calcula el descuento a aplicar, limitándolo al valor del subtotal, y lo almacena como un número con dos decimales.
        } // otra cosa que no sabia y me ensenio el chat
      
      

      const costoEnvio = Number(createPedidoDto.costoEnvio ?? 0); // eso hay que ver como se gestiona, por ahora lo dejo asi, con la posibilidad de nulos, porque habra dias que sea envio gratis o el costo envio lo calculara por zonas
      const imponible = Math.max(subtotal - valorDescuentoPedido, 0); // subtotal menos descuento, nunca negativo
      const impuesto = 0; // no se si hay impuesto eso es muy adelantado, por ahora paraiso fiscal 
      const total = Number((imponible + costoEnvio + impuesto).toFixed(2));

      // TYPEORM me empezo a dar problemas al cargarlo asi, algo con el overload de create, asi que lo hice de la forma clasica

      // const pedido = manager.create<Pedido, DeepPartial<Pedido>>(Pedido, {
      //   usuario,
      //   direccion: direccion ?? null,
      //   direccionRestaurante: direccionRestaurante ?? null,
      //   metodoPago,
      //   descuento: descuentoPedido ?? null,
      //   fechaPedido: new Date(), // ver si no da problemas 
      //   estado: 'Ingresado',                           // Ingresado -> EsperandoDelivery  -> EnCamino -> Entregado // Cancelado
      //   subtotal: Number(subtotal.toFixed(2)),
      //   costoEnvio,
      //   impuesto,
      //   total,
      //   codigoSeguimiento: randomUUID().slice(0, 8), // corto/legible
      //   detalles,                                     // gracias a cascade: true
      // });


      const pedido = manager.create(Pedido);

      pedido.usuario = usuario;
      pedido.direccion = direccion;
      pedido.direccionRestaurante = direccionRestaurante;
      pedido.metodoPago = metodoPago;
      pedido.descuento = descuentoPedido;
      pedido.fechaPedido = new Date();
      pedido.estado = 'CREADO';
      pedido.subtotal = Number(subtotal.toFixed(2));
      pedido.costoEnvio = costoEnvio;
      pedido.impuesto = impuesto;
      pedido.total = total;
      pedido.codigoSeguimiento = randomUUID().slice(0, 8);
      pedido.detalles = detalles;




      // Persistir todo junto
      const saved = await manager.save(pedido);
      return saved; // incluye detalles si tienes eager, si no, expón vía GET/:id con relations
    });
  }


  findAll() {
    return `This action returns all pedido`;
  }

  async findOne(pedidoId: number) {
    const pedido = await this.dataSource.getRepository(Pedido).findOne({
      where: { pedidoID: pedidoId },
      relations: [
        'usuario',
        'direccion',
        'direccionRestaurante',
        'metodoPago',
        'descuento',
        'detalles',
        'detalles.plato',
        'detalles.plato.categoria',
        'detalles.plato.restaurante',
      ],
    });
    if (!pedido) throw new NotFoundException('Pedido no encontrado');
    return pedido;
  }

  async findByUsuario(usuarioId: number) {
  return this.dataSource.getRepository(Pedido).find({
    where: { usuario: { usuarioID: usuarioId } },
    order: { fechaPedido: 'DESC' },
    relations: ['detallepedido', 'detallepedido.plato'],
  });
  }



  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  async updateEstado(pedidoId: number, estado: UpdateEstadoDto['estado']) {
  const repo = this.dataSource.getRepository(Pedido);
  const pedido = await repo.findOne({ where: { pedidoID: pedidoId } }); // validamos que el pedido exista
  if (!pedido) throw new NotFoundException('Pedido no encontrado');

  pedido.estado = estado;
  return repo.save(pedido);
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }

 



}




// ============================================ esto lo teniamos cuando permitiamos que la direccion sea opcional, osea que sea null cuando era retiro local 
// se saco porque ya no lo tenemos asi, ahora este pedido es el de delivery

// // si viene direccionId, confirmar que la direccion existe y pertenece al usuario, sino es retiro en local
      //   const direccion = await manager.findOneByOrFail(Direccion, {
      //   direccionID: createPedidoDto.direccionId,
      //   });
      // if (createPedidoDto.direccionId) {
      //   direccion = await manager.findOne(Direccion, {
      //     where: { direccionID: createPedidoDto.direccionId },
      //     relations: ['usuario'], // aseguramos de que trae la relacion con usuario
      //   });
      //   if (!direccion || direccion.usuario?.usuarioID !== createPedidoDto.usuarioId) { // si no existe o no pertenece al usuario
      //     throw new BadRequestException('La dirección no pertenece al usuario');
      //   }
      // }



// misma logica que direccion,
// se podria reciclar esta validacion, pero requerria complicarla para cuando es id restaurante y cuando es usuario, por ahora lo dejo asi
      // let direccionRestaurante: DireccionRestaurante | null = null;
      // if (createPedidoDto.direccionRestauranteId) {
      //   direccionRestaurante = await manager.findOne(DireccionRestaurante, {
      //     where: { direccionRestauranteID: createPedidoDto.direccionRestauranteId },
      //   });
      //   if (!direccionRestaurante) throw new BadRequestException('Dirección del restaurante inválida');
      // }

// descuento
      // let descuentoPedido: Descuento | null = null; // si viene codigo de descuento, validarlo y calcular el descuento
      // if (createPedidoDto.codigoDescuento) {
      //   descuentoPedido = await manager.findOne(Descuento, { //
      //     where: { codigo: createPedidoDto.codigoDescuento, activo: true }, // traendo el descuento que coincida con el codigo y que este activo
      //   });
      //   if (!descuentoPedido) throw new BadRequestException('Código de descuento inválido');

      // const now = new Date();
      //   if (descuentoPedido.fechaInicio > now || descuentoPedido.fechaFin < now) {
      //     throw new BadRequestException('El código de descuento no está vigente');
      //   }