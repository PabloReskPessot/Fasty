import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Restaurante } from '../../restaurante/entities/restaurante.entity';

@Entity()
export class CategoriaRestaurante {
  @PrimaryGeneratedColumn()
  categoriaRestauranteID: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @OneToMany(() => Restaurante, (restaurante) => restaurante.categoria)
  restaurantes: Restaurante[];
}