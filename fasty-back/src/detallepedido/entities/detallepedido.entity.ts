import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { Plato } from '../../plato/entities/plato.entity';
import { Descuento } from '../../descuento/entities/descuento.entity';

@Entity()
export class DetallePedido {
  @PrimaryGeneratedColumn()
  detallePedidoID: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.detalles)
  pedido: Pedido;

  @ManyToOne(() => Plato, (plato) => plato.detalles)
  plato: Plato;

  @ManyToOne(() => Descuento, (descuento) => descuento.detalles, { nullable: true })
  descuento: Descuento;

  @Column()
  cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precioUnitario: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  subtotal: number;
}