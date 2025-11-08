import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Restaurante } from '../../restaurante/entities/restaurante.entity';
import { DetallePedido } from '../../detallepedido/entities/detallepedido.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';

@Entity()
export class Plato {
  @PrimaryGeneratedColumn()
  platoID: number;

  @Column()
  nombre: string;

  @Column()
  precio: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  porcentajeDescuento: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column({ nullable: true })
  imagen: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ default: true })
  activo: boolean;

  @ManyToOne(() => Categoria, (categoria) => categoria.platos, { eager: true })
  @JoinColumn({ name: 'categoriaId' })
  categoria: Categoria;

  @ManyToOne(() => Restaurante, (restaurante) => restaurante.platos)
  restaurante: Restaurante;

  @OneToMany(() => DetallePedido, (detalle) => detalle.plato)
  detalles: DetallePedido[];
}