import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repartidor } from './entities/repartidor.entity';
import { CreateRepartidorDto } from './dto/create-repartidor.dto';
import { UpdateRepartidorDto } from './dto/update-repartidor.dto';

@Injectable()
export class RepartidorService {
  constructor(
    @InjectRepository(Repartidor)
    private readonly repartidorRepository: Repository<Repartidor>,
  ) {}

  async create(createRepartidorDto: CreateRepartidorDto): Promise<Repartidor> {
    const repartidor = this.repartidorRepository.create(createRepartidorDto);
    return this.repartidorRepository.save(repartidor);
  }

  async findAll(): Promise<Repartidor[]> {
    return this.repartidorRepository.find({
      where: { activo: true },
      relations: ['pedidos', 'resenia'], // si querés incluir relaciones
    });
  }

  async findOne(id: number): Promise<Repartidor> {
    const repartidor = await this.repartidorRepository.findOne({
      where: { repartidorID: id },
      relations: ['pedidos', 'resenia'],
    });

    if (!repartidor) {
      throw new NotFoundException(`Repartidor ${id} no encontrado`);
    }

    return repartidor;
  }

  async update(id: number, updateRepartidorDto: UpdateRepartidorDto): Promise<Repartidor> {
    const repartidor = await this.findOne(id);
    const updated = Object.assign(repartidor, updateRepartidorDto);
    return this.repartidorRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const repartidor = await this.findOne(id);
    repartidor.activo = false; // borrado lógico
    await this.repartidorRepository.save(repartidor);
  }
}
