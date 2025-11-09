import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { DetallePedido } from '../../detallepedido/entities/detallepedido.entity';

@Entity()
export class Descuento {
  @PrimaryGeneratedColumn()
  descuentoID: number;

  @Column()
  descripcion: string;

  @Column()
  tipo: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  valor: number;

  @Column({ type: 'timestamp' })
  fechaInicio: Date;

  @Column({ type: 'timestamp' })
  fechaFin: Date;

  @Column({ nullable: true })
  codigo: string;


  @Column({ default: true })
  activo: boolean;

  @OneToMany(() => Pedido, (pedido) => pedido.descuento)
  pedidos: Pedido[];

  @OneToMany(() => DetallePedido, (detalle) => detalle.descuento)
  detalles: DetallePedido[];
}