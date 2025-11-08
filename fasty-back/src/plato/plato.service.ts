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

  //Crear un nuevo plato
  async create(createPlatoDto: CreatePlatoDto): Promise<Plato> {
    const plato = this.platoRepository.create(createPlatoDto);
    return await this.platoRepository.save(plato);
  }

  //Listar todos los platos
  async findAll(): Promise<Plato[]> {
    return await this.platoRepository.find({
      relations: ['restaurante'], // opcional si querés incluir el restaurante
    });
  }

  // Buscar un plato por ID
  async findOne(id: number): Promise<Plato> {
    const plato = await this.platoRepository.findOne({
      where: { platoID: id },
     relations: ['restaurante', 'detalles'],
    });

    if (!plato) {
      throw new NotFoundException(`No se encontró el plato ${id}`);
    }
    return plato;
  }

  // editar un plato
  async update(id: number, updatePlatoDto: UpdatePlatoDto): Promise<Plato> {
    const plato = await this.findOne(id);
    Object.assign(plato, updatePlatoDto);
    return await this.platoRepository.save(plato);
  }

  // Eliminar (borrado lógico si preferís)
  async remove(id: number): Promise<void> {
    const plato = await this.findOne(id);
    await this.platoRepository.remove(plato);
  }
}
