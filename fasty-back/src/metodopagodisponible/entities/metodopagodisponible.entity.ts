import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MetodoPago } from 'src/metodopago/entities/metodopago.entity';

@Entity('metodos_pago_disponibles')
export class MetodoPagoDisponible {
  @PrimaryGeneratedColumn()
  metodoPagoDisponibleID: number;

  @Column({ length: 100 })
  tipo: string;

  @Column({ length: 100 })
  banco: string;

  @OneToMany(() => MetodoPago, (metodoPago) => metodoPago.metodoPagoDisponible)
  metodosPago: MetodoPago[];
}