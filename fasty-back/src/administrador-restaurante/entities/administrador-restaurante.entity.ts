import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Restaurante } from '../../restaurante/entities/restaurante.entity';

@Entity()
export class AdministradorRestaurante {
  @PrimaryGeneratedColumn()
  administradorRestauranteID: number;

  @OneToOne(() => Restaurante, restaurante => restaurante.administrador)
  @JoinColumn({ name: 'restauranteID' })
  restaurante: Restaurante;

  @Column()
  cuit: string;

  @Column()
  mail: string;

  @Column()
  nombre: string;

  @Column()
  clave: string;

  @Column({ default: true })
  activo: boolean;
}
