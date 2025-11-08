import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Plato } from 'src/plato/entities/plato.entity'; 

@Entity('categorias')
export class Categoria {
  @PrimaryGeneratedColumn()
  categoriaID: number;

  @Column({ length: 100 })
  tipoComida: string;

  // Relación con platos
  @OneToMany(() => Plato, (plato) => plato.categoria)
  platos: Plato[];
}