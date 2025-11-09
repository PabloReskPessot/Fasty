export class CreateDetallepedidoDto { 
    platoId: number;
    cantidad: number;
    descuentoId?: number; // puede no tener descuento
    precioUnitario: number;
    subtotal: number; 
}
