import { CreateDetallepedidoDto } from '../../detallepedido/dto/create-detallepedido.dto';

export class CreatePedidoDto {
  usuarioId: number;
  direccionId?: number;                 // opcional, retiro en local si no viene
  direccionRestauranteId?: number;      // si aplica
  metodoPagoId: number;                 // id de MetodoPago del usuario
  codigoDescuento?: string;             // opcional
  costoEnvio?: number;                  // seguramente esto sea variable segun la distancia recorrida + el dia/hora, y habra dias que te lo dejen gratis
  items: CreateDetallepedidoDto[];      // carrito del front, cuando se cree el pedido, se crean los detalles de pedido asociados
}