import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plato } from './entities/plato.entity';
import { CreatePlatoDto } from './dto/create-plato.dto';
import { UpdatePlatoDto } from './dto/update-plato.dto';

@Injectable()
export class PlatoService {
  constructor(
    @InjectRepository(Plato)
    private readonly platoRepository: Repository<Plato>,
  ) {}

  // ✅ Crear un nuevo plato
  async create(createPlatoDto: CreatePlatoDto): Promise<Plato> {
    // Si el DTO tiene campos como precio y porcentajeDescuento,
    // podés calcular un campo "total" antes de guardar.
    const plato = this.platoRepository.create({
      ...createPlatoDto,
      total:
        createPlatoDto.precio &&
        createPlatoDto.porcentajeDescuento !== undefined
          ? createPlatoDto.precio * (1 - createPlatoDto.porcentajeDescuento / 100)
          : createPlatoDto.precio,
    });

    return this.platoRepository.save(plato);
  }

  // Listar todos los platos
  async findAll(): Promise<Plato[]> {
    return this.platoRepository.find({
      relations: ['restaurante'], // incluir datos del restaurante si es necesario
      order: { platoID: 'ASC' },
    });
  }

  // buscar un plato por ID
  async findOne(id: number): Promise<Plato> {
    const plato = await this.platoRepository.findOne({
      where: { platoID: id },
      relations: ['restaurante', 'detalles'],
    });

    if (!plato) {
      throw new NotFoundException(`Plato ${id} no encontrado`);
    }

    return plato;
  }

  // Editar un plato
  async update(id: number, updatePlatoDto: UpdatePlatoDto): Promise<Plato> {
    const plato = await this.findOne(id);
    Object.assign(plato, updatePlatoDto);

    // Si cambian los precios o descuentos, recalculamos el total
    if (
      updatePlatoDto.precio !== undefined ||
      updatePlatoDto.porcentajeDescuento !== undefined
    ) {
      const precio = updatePlatoDto.precio ?? plato.precio;
      const descuento =
        updatePlatoDto.porcentajeDescuento ?? plato.porcentajeDescuento ?? 0;
      plato.total = precio * (1 - descuento / 100);
    }

    return this.platoRepository.save(plato);
  }

  // Eliminar un plato
  async remove(id: number): Promise<{ message: string }> {
    const plato = await this.findOne(id);
    await this.platoRepository.remove(plato);
    return { message: `Plato con ID ${id} eliminado correctamente` };
  }
}
