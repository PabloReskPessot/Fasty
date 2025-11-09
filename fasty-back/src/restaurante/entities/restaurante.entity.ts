import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { DireccionRestaurante } from '../../direccionrestaurante/entities/direccionrestaurante.entity';
import { CategoriaRestaurante } from '../../categoriarestaurante/entities/categoriarestaurante.entity';
import { AdministradorRestaurante } from '../../administrador-restaurante/entities/administrador-restaurante.entity';
import { Plato } from '../../plato/entities/plato.entity';
import { ReseniaRestaurante } from 'src/resenia-restaurante/entities/resenia-restaurante.entity';

@Entity()
export class Restaurante {
  @PrimaryGeneratedColumn()
  restauranteID: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  telefono: string;

  @Column({ type: 'time' })
  horarioApertura: string;

  @Column({ type: 'time' })
  horarioCierre: string;

  @Column({ nullable: true })
  logo: string;

  @Column({ type: 'decimal', precision: 3, scale: 2, nullable: true })
  puntuacion: number;

  @Column({ default: true })
  activo: boolean;

  @ManyToOne(() => CategoriaRestaurante, (categoria) => categoria.restaurantes)
  categoria: CategoriaRestaurante;

  @OneToOne(() => DireccionRestaurante, (direccion) => direccion.restaurante)
  @JoinColumn()
  direccionRestaurante: DireccionRestaurante;

  @OneToOne(() => AdministradorRestaurante, (admin) => admin.restaurante)
  administrador: AdministradorRestaurante;

  @OneToMany(() => Plato, (plato) => plato.restaurante)
  platos: Plato[];

  @OneToMany(() => ReseniaRestaurante, (resenia) => resenia.restaurante)
  reseniaRestaurantes: ReseniaRestaurante[];

  
}