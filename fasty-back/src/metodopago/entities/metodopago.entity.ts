import { Entity, PrimaryGeneratedColumn, Column, OneToMany , ManyToOne, JoinColumn} from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { MetodoPagoDisponible } from '../../metodopagodisponible/entities/metodopagodisponible.entity';

@Entity()
export class MetodoPago {
  @PrimaryGeneratedColumn()
  metodoPagoID: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.metodosPago)
  @JoinColumn({ name: 'usuarioID' })
  usuario: Usuario;

  @Column()
  usuarioID: number;

  @Column({ default: false })
  predeterminado: boolean;

  @OneToMany(() => Pedido, (pedido) => pedido.metodoPago)
  pedidos: Pedido[];

  @ManyToOne(() => MetodoPagoDisponible, (disponible) => disponible.metodosPago)
  @JoinColumn({ name: 'metodoPagoDisponibleID' })
  metodoPagoDisponible: MetodoPagoDisponible;

  @Column()
  metodoPagoDisponibleID: number;
}

// tendriamos que crear un metodo de pago cliente, no tiene sentido que este sea global si le vamos a poner predeterminado