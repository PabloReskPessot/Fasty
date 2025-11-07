import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Repartidor } from '../../repartidor/entities/repartidor.entity';

@Entity()
export class ResenaRepartidor {
  @PrimaryGeneratedColumn()
  resenaRepartidorID: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.reseniasRepartidores)
  usuario: Usuario;

  @ManyToOne(() => Repartidor, (repartidor) => repartidor.resenas)
  repartidor: Repartidor;

  @Column()
  puntuacion: number;

  @Column({ nullable: true })
  descripcion: string;
}