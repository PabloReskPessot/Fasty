import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
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

  @ManyToOne(() => Usuario, usuario => usuario.pedidos, { nullable: false })
  @JoinColumn({ name: 'usuarioID' })
  usuario: Usuario;

  @ManyToOne(() => Direccion, { nullable: true })
  @JoinColumn({ name: 'direccionID' })
  direccion: Direccion;

  @ManyToOne(() => DireccionRestaurante, { nullable: true })
  @JoinColumn({ name: 'direccionRestauranteID' })
  direccionRestaurante: DireccionRestaurante;

  @ManyToOne(() => Repartidor, repartidor => repartidor.pedidos, { nullable: true })
  @JoinColumn({ name: 'repartidorID' })
  repartidor: Repartidor;

  @ManyToOne(() => MetodoPago, (metodo) => metodo.pedidos)
  @JoinColumn({ name: 'metodoPagoID' })
  metodoPago: MetodoPago;

  @ManyToOne(() => Descuento, (descuento) => descuento.pedidos, { nullable: true })
  @JoinColumn({ name: 'descuentoID' })
  descuento: Descuento;

  @Column({ type: 'timestamp' })
  fechaPedido: Date;

  @Column()
  estado: string;

  @Column({ type: 'decimal', precision: 12, scale: 2  })
  subtotal: number;

  @Column({ type: 'decimal',  precision: 12, scale: 2 })
  costoEnvio: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  impuesto: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  total: number;

  @Column({ nullable: true })
  codigoSeguimiento: string;

  @OneToMany(() => DetallePedido, (detalle) => detalle.pedido, { cascade: true }) // Cascade para que al crear un pedido se creen tambien los detalles, lo sugirio el chat
detalles: DetallePedido[];
}