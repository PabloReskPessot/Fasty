import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Direccion } from '../../direccion/entities/direccion.entity';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { ReseniaRestaurante } from '../../resenia-restaurante/entities/resenia-restaurante.entity';
import { ReseniaRepartidor } from '../../resenia-repartidor/entities/resenia-repartidor.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  usuarioID: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  email: string;

  @Column()
  contrasena: string;

  @Column({ nullable: true })
  telefono: string;

  @Column({ type: 'date', nullable: true })
  fechaNacimiento: Date;

  @Column({ nullable: true })
  genero: string;

  @Column({ default: true })
  activo: boolean;

  @OneToMany(() => Direccion, (direccion) => direccion.usuario)
  direcciones: Direccion[];

  @OneToMany(() => Pedido, (pedido) => pedido.usuario)
  pedidos: Pedido[];

  @OneToMany(() => ReseniaRestaurante, (resenia) => resenia.usuario)
  reseniaRestaurantes: ReseniaRestaurante[];

  @OneToMany(() => ReseniaRepartidor, (resenia) => resenia.usuario)
  reseniaRepartidores: ReseniaRepartidor[];
}