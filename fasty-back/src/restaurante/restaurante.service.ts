import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Restaurante } from './entities/restaurante.entity';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';

@Injectable()
export class RestauranteService {
  constructor(
    @InjectRepository(Restaurante)
    private readonly restauranteRepository: Repository<Restaurante>,
  ) {}

  async create(createRestauranteDto: CreateRestauranteDto): Promise<Restaurante> {
    const restaurante = this.restauranteRepository.create(createRestauranteDto);
    return await this.restauranteRepository.save(restaurante);
  }

  async findAll(): Promise<Restaurante[]> {
    return await this.restauranteRepository.find({
      relations: ['categoria', 'direccionRestaurante', 'administrador', 'platos'],
    });
  }

  async findOne(id: number): Promise<Restaurante> {
    const restaurante = await this.restauranteRepository.findOne({
      where: { restauranteID: id },
      relations: ['categoria', 'direccionRestaurante', 'administrador', 'platos'],
    });

    if (!restaurante) {
      throw new NotFoundException(`Restaurante con ID ${id} no encontrado`);
    }

    return restaurante;
  }

  async update(id: number, updateRestauranteDto: UpdateRestauranteDto): Promise<Restaurante> {
    const restaurante = await this.findOne(id);
    Object.assign(restaurante, updateRestauranteDto);
    return await this.restauranteRepository.save(restaurante);
  }

  async remove(id: number): Promise<void> {
    const result = await this.restauranteRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Restaurante con ID ${id} no encontrado`);
    }
  }
}
