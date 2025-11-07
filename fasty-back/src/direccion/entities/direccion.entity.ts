import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity()
export class Direccion {
  @PrimaryGeneratedColumn()
  direccionID: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.direcciones, { nullable: true })
  usuario: Usuario;

  @Column()
  calle: string;

  @Column()
  altura: string;

  @Column()
  ciudad: string;

  @Column()
  provincia: string;

  @Column({ nullable: true })
  pisoDepartamento: string;

  @Column({ nullable: true })
  indicaciones: string;

  @Column({ type: 'decimal', precision: 9, scale: 6, nullable: true })
  latitud: number;

  @Column({ type: 'decimal', precision: 9, scale: 6, nullable: true })
  longitud: number;

  @Column({ default: false })
  predeterminada: boolean;
}