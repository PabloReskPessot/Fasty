import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fechaNacimiento: Date;

  @Column()
  genero: string;

  @Column()
  activo: boolean;
}
