import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Repartidor } from '../../repartidor/entities/repartidor.entity';

@Entity()
export class ReseniaRepartidor {
  @PrimaryGeneratedColumn()
  reseniaRepartidorID: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.reseniaRepartidores)
  usuario: Usuario;

  @ManyToOne(() => Repartidor, (repartidor) => repartidor.resenia)
  repartidor: Repartidor;

  @Column()
  puntuacion: number;

  @Column({ nullable: true })
  descripcion: string;
}