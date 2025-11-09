import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Restaurante } from '../../restaurante/entities/restaurante.entity';

@Entity()
export class DireccionRestaurante {
  @PrimaryGeneratedColumn()
  direccionRestauranteID: number;

  @Column()
  calle: string;

  @Column()
  altura: string;

  @Column()
  ciudad: string;


  @Column({ type: 'decimal', precision: 9, scale: 6, nullable: true })
  latitud: number;

  @Column({ type: 'decimal', precision: 9, scale: 6, nullable: true })
  longitud: number;

  @OneToOne(() => Restaurante, restaurante => restaurante.direccionRestaurante)
  @JoinColumn({ name: 'restauranteID' })
  restaurante: Restaurante;

  
}
