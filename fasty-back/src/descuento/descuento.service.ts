import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Descuento } from './entities/descuento.entity';
import { CreateDescuentoDto } from './dto/create-descuento.dto';
import { UpdateDescuentoDto } from './dto/update-descuento.dto';

@Injectable()
export class DescuentoService {
  constructor(
    @InjectRepository(Descuento)
    private readonly descuentoRepository: Repository<Descuento>,
  ) {}

  // crear descuento general
  async create(createDescuentoDto: CreateDescuentoDto): Promise<Descuento> {
    const nuevoDescuento = this.descuentoRepository.create(createDescuentoDto);
    return await this.descuentoRepository.save(nuevoDescuento);
  }

  // listar
  async findAll(): Promise<Descuento[]> {
    return await this.descuentoRepository.find();
  }

  // buscar por id
  async findOne(id: number): Promise<Descuento> {
    const descuento = await this.descuentoRepository.findOne({ where: { descuentoID: id } });
    if (!descuento) {
      throw new NotFoundException(`Descuento ${id} no encontrado`);
    }
    return descuento;
  }
//editar descuento
  async update(id: number, updateDescuentoDto: UpdateDescuentoDto): Promise<Descuento> {
    const descuento = await this.findOne(id);
    const actualizado = Object.assign(descuento, updateDescuentoDto);
    return await this.descuentoRepository.save(actualizado);
  }

  // eliminar desceunto
  async remove(id: number): Promise<string> {
    const descuento = await this.findOne(id);
    await this.descuentoRepository.remove(descuento);
    return `Descuento ${id} eliminado correctamente`;
  }
}
