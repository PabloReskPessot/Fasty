import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Restaurante } from '../../restaurante/entities/restaurante.entity';
import { DetallePedido } from '../../detallepedido/entities/detallepedido.entity';

@Entity()
export class Plato {
  @PrimaryGeneratedColumn()
  platoID: number;

  @Column()
  nombre: string;

  @Column()
  precio: number;

  @Column({ nullable: true })
  imagen: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ default: true })
  activo: boolean;

  @ManyToOne(() => Restaurante, (restaurante) => restaurante.platos)
  restaurante: Restaurante;

  @OneToMany(() => DetallePedido, (detalle) => detalle.plato)
  detalles: DetallePedido[];
}