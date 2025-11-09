import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Repartidor } from '../../repartidor/entities/repartidor.entity';

@Entity()
export class ReseniaRepartidor {
  @PrimaryGeneratedColumn()
  reseniaRepartidorID: number;

  @ManyToOne(() => Usuario, usuario => usuario.reseniaRepartidores)
  @JoinColumn({ name: 'usuarioID' })
  usuario: Usuario;

  @ManyToOne(() => Repartidor, repartidor => repartidor.resenia)
  @JoinColumn({ name: 'repartidorID' })
  repartidor: Repartidor;

  @Column()
  puntuacion: number;

  @Column({ nullable: true })
  descripcion: string;
}