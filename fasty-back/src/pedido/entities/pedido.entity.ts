import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Direccion } from '../../direccion/entities/direccion.entity';
import { DireccionRestaurante } from '../../direccionrestaurante/entities/direccionrestaurante.entity';
import { Repartidor } from '../../repartidor/entities/repartidor.entity';
import { MetodoPago } from '../../metodopago/entities/metodopago.entity';
import { Descuento } from '../../descuento/entities/descuento.entity';
import { DetallePedido } from '../../detallepedido/entities/detallepedido.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  pedidoID: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.pedidos)
  usuario: Usuario;

  @ManyToOne(() => Direccion, { nullable: true })
  direccion: Direccion;

  @ManyToOne(() => DireccionRestaurante, { nullable: true })
  direccionRestaurante: DireccionRestaurante;

  @ManyToOne(() => Repartidor, (repartidor) => repartidor.pedidos, { nullable: true })
  repartidor: Repartidor;

  @ManyToOne(() => MetodoPago, (metodo) => metodo.pedidos)
  metodoPago: MetodoPago;

  @ManyToOne(() => Descuento, (descuento) => descuento.pedidos, { nullable: true })
  descuento: Descuento;

  @Column({ type: 'timestamp' })
  fechaPedido: Date;

  @Column()
  estado: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  subtotal: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  costoEnvio: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  impuesto: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @Column({ nullable: true })
  codigoSeguimiento: string;

  @OneToMany(() => DetallePedido, (detalle) => detalle.pedido)
  detalles: DetallePedido[];
}