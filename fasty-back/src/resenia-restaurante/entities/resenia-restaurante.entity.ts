import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Restaurante } from '../../restaurante/entities/restaurante.entity';

@Entity()
export class ReseniaRestaurante {
  @PrimaryGeneratedColumn()
  reseniaRestauranteID: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.reseniaRestaurantes)
  usuario: Usuario;

  @ManyToOne(() => Restaurante, (restaurante) => restaurante)
  restaurante: Restaurante;

  @Column()
  puntuacion: number;

  @Column({ nullable: true })
  descripcion: string;
}