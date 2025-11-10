import { CreateDetallepedidoDto } from '../../detallepedido/dto/create-detallepedido.dto';

export class CreatePedidoDto {
  usuarioId: number;
  direccionId: number;                 
  direccionRestauranteId: number;      
  metodoPagoId: number;                 // id de MetodoPago del usuario
  codigoDescuento: string;             
  costoEnvio?: number;                  // seguramente esto sea variable segun la distancia recorrida + el dia/hora, y habra dias que te lo dejen gratis
  items: CreateDetallepedidoDto[];      // carrito del front, cuando se cree el pedido, se crean los detalles de pedido asociados
}