import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Restaurante } from '../../restaurante/entities/restaurante.entity';

@Entity()
export class ResenaRestaurante {
  @PrimaryGeneratedColumn()
  resenaRestauranteID: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.resenasRestaurantes)
  usuario: Usuario;

  @ManyToOne(() => Restaurante, (restaurante) => restaurante)
  restaurante: Restaurante;

  @Column()
  puntuacion: number;

  @Column({ nullable: true })
  descripcion: string;
}