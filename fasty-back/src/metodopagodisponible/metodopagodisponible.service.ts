import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodoPagoDisponible } from './entities/metodopagodisponible.entity';
import { CreateMetodopagodisponibleDto } from './dto/create-metodopagodisponible.dto';
import { UpdateMetodopagodisponibleDto } from './dto/update-metodopagodisponible.dto';

@Injectable()
export class MetodopagodisponibleService {
  constructor(
    @InjectRepository(MetodoPagoDisponible)
    private readonly metodoPagoDisponibleRepository: Repository<MetodoPagoDisponible>,
  ) {}

  async create(createDto: CreateMetodopagodisponibleDto) {
    const nuevoMetodo = this.metodoPagoDisponibleRepository.create(createDto);
    return await this.metodoPagoDisponibleRepository.save(nuevoMetodo);
  }

  async findAll() {
    return await this.metodoPagoDisponibleRepository.find({
      relations: ['metodosPago'], // Para ver los métodos asociados si querés
    });
  }

  async findOne(id: number) {
    const metodo = await this.metodoPagoDisponibleRepository.findOne({
      where: { metodoPagoDisponibleID: id },
      relations: ['metodosPago'],
    });

    if (!metodo) {
      throw new NotFoundException(`Método de pago ${id} no encontrado`);
    }

    return metodo;
  }

  async update(id: number, updateDto: UpdateMetodopagodisponibleDto) {
    const metodo = await this.metodoPagoDisponibleRepository.preload({
      metodoPagoDisponibleID: id,
      ...updateDto,
    });

    if (!metodo) {
      throw new NotFoundException(`Método de pago ${id} no encontrado`);
    }

    return await this.metodoPagoDisponibleRepository.save(metodo);
  }

  async remove(id: number) {
    const metodo = await this.metodoPagoDisponibleRepository.findOneBy({ metodoPagoDisponibleID: id });
    if (!metodo) {
      throw new NotFoundException(`Método de pago ${id} no encontrado`);
    }

    await this.metodoPagoDisponibleRepository.remove(metodo);
    return { message: `Método de pago ${id} eliminado correctamente` };
  }
}
