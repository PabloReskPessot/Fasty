import { CreateDetallepedidoDto } from '../../detallepedido/dto/create-detallepedido.dto';

export class CreatePedidoDto {
  usuarioId: number;
  direccionId?: number;                 // opcional, retiro en local si no viene
  direccionRestauranteId?: number;      // si aplica
  metodoPagoId: number;                 // id de MetodoPago del usuario
  codigoDescuento?: string;             // opcional
  costoEnvio?: number;                  // si hay lógica de zonas, puedes omitir y calcular server
  items: CreateDetallepedidoDto[];            // carrito del front
}