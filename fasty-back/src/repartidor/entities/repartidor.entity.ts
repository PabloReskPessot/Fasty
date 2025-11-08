import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';
import { ReseniaRepartidor } from '../../resenia-repartidor/entities/resenia-repartidor.entity';

@Entity()
export class Repartidor {
  @PrimaryGeneratedColumn()
  repartidorID: number;

  @Column()
  nombre: string;

  @Column()
  vehiculo: string;

  @Column({ nullable: true })
  patente: string;

  @Column()
  documento: string;

  @Column({ default: true })
  disponible: boolean;

  @Column({ type: 'decimal', precision: 3, scale: 2, nullable: true })
  calificacion: number;

  @Column({ default: true })
  activo: boolean;

  @OneToMany(() => Pedido, (pedido) => pedido.repartidor)
  pedidos: Pedido[];

  @OneToMany(() => ReseniaRepartidor, (resenia) => resenia.repartidor)
  resenia: ReseniaRepartidor[];
}

// ver como gestionar las calificaciones de los repartidores
// se saca de sumar todas las calificaciones y dividirlas por la cantidad de resenias
// como se guardaria y cada vez que se agrega una nueva resenia se actualiza?