import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { Plato } from '../../plato/entities/plato.entity';
import { Descuento } from '../../descuento/entities/descuento.entity';

@Entity()
export class DetallePedido {
  @PrimaryGeneratedColumn()
  detallePedidoID: number;

  @ManyToOne(() => Pedido, pedido => pedido.detalles, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'pedidoID' })
  pedido: Pedido;

  @ManyToOne(() => Plato, (plato) => plato.detalles)
  @JoinColumn({ name: 'platoID' })
  plato: Plato;

  @ManyToOne(() => Descuento, (descuento) => descuento.detalles, { nullable: true })
  @JoinColumn({ name: 'descuentoID' })  
  descuento: Descuento;

  @Column()
  cantidad: number;

  @Column({ type: 'decimal',  precision: 12, scale: 2 })
  precioUnitario: number;

  @Column({ type: 'decimal',  precision: 12, scale: 2 })
  subtotal: number;
}