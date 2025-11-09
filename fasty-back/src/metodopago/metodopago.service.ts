import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodoPago } from './entities/metodopago.entity';
import { CreateMetodopagoDto } from './dto/create-metodopago.dto';
import { UpdateMetodopagoDto } from './dto/update-metodopago.dto';

@Injectable()
export class MetodopagoService {
  constructor(
    @InjectRepository(MetodoPago)
    private readonly metodoPagoRepository: Repository<MetodoPago>,
  ) {}

  async create(createMetodopagoDto: CreateMetodopagoDto) {
    const metodoPago = this.metodoPagoRepository.create(createMetodopagoDto);
    return await this.metodoPagoRepository.save(metodoPago);
  }

  async findAll() {
    return await this.metodoPagoRepository.find({
      relations: ['usuario', 'metodoPagoDisponible'],
    });
  }

  async findOne(id: number) {
    const metodoPago = await this.metodoPagoRepository.findOne({
      where: { metodoPagoID: id },
      relations: ['usuario', 'metodoPagoDisponible'],
    });

    if (!metodoPago) {
      throw new NotFoundException(`Método de pago ${id} no encontrado`);
    }

    return metodoPago;
  }

  async update(id: number, updateMetodopagoDto: UpdateMetodopagoDto) {
    const metodoPago = await this.metodoPagoRepository.preload({
      metodoPagoID: id,
      ...updateMetodopagoDto,
    });

    if (!metodoPago) {
      throw new NotFoundException(`Método de pago ${id} no encontrado`);
    }

    return await this.metodoPagoRepository.save(metodoPago);
  }

  async remove(id: number) {
    const metodoPago = await this.metodoPagoRepository.findOneBy({ metodoPagoID: id });
    if (!metodoPago) {
      throw new NotFoundException(`Método de pago ${id} no encontrado`);
    }

    await this.metodoPagoRepository.remove(metodoPago);
    return { message: `Método de pago  ${id} eliminado correctamente` };
  }
}
