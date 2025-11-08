import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';

@Entity()
export class MetodoPago {
  @PrimaryGeneratedColumn()
  metodoPagoID: number;

  @Column()
  tipo: string;

  @Column({ default: false })
  predeterminado: boolean;

  @OneToMany(() => Pedido, (pedido) => pedido.metodoPago)
  pedidos: Pedido[];
}

// tendriamos que crear un metodo de pago cliente, no tiene sentido que este sea global si le vamos a poner predeterminado