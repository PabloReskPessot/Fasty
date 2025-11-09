import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DireccionRestaurante } from './entities/direccionrestaurante.entity';
import { CreateDireccionrestauranteDto } from './dto/create-direccionrestaurante.dto';
import { UpdateDireccionrestauranteDto } from './dto/update-direccionrestaurante.dto';
import { Restaurante } from '../restaurante/entities/restaurante.entity';

@Injectable()
export class DireccionrestauranteService {
  constructor(
    @InjectRepository(DireccionRestaurante)
    private readonly direccionRestauranteRepository: Repository<DireccionRestaurante>,

    @InjectRepository(Restaurante)
    private readonly restauranteRepository: Repository<Restaurante>,
  ) {}

  //crear
  async create(createDireccionrestauranteDto: CreateDireccionrestauranteDto) {
    const direccion = this.direccionRestauranteRepository.create(createDireccionrestauranteDto);

    if (createDireccionrestauranteDto.restauranteId) {
      const restaurante = await this.restauranteRepository.findOne({
        where: { restauranteID: createDireccionrestauranteDto.restauranteId },
      });
      if (!restaurante) throw new NotFoundException('Restaurante no encontrado');
      direccion.restaurante = restaurante;
    }

    return this.direccionRestauranteRepository.save(direccion);
  }

  //listar 
  findAll() {
    return this.direccionRestauranteRepository.find({
      relations: ['restaurante'],
    });
  }

  //buscar por id
  async findOne(id: number) {
    const direccion = await this.direccionRestauranteRepository.findOne({
      where: { direccionRestauranteID: id },
      relations: ['restaurante'],
    });
    if (!direccion) {
      throw new NotFoundException(`Dirección de restaurante ${id} no encontrada`);
    }
    return direccion;
  }

  //editar
  async update(id: number, updateDireccionrestauranteDto: UpdateDireccionrestauranteDto) {
    const direccion = await this.findOne(id);

    Object.assign(direccion, updateDireccionrestauranteDto);

    if (updateDireccionrestauranteDto.restauranteId) {
      const restaurante = await this.restauranteRepository.findOne({
        where: { restauranteID: updateDireccionrestauranteDto.restauranteId },
      });
      if (!restaurante) throw new NotFoundException('Restaurante no encontrado');
      direccion.restaurante = restaurante;
    }

    return this.direccionRestauranteRepository.save(direccion);
  }

  //eliminar
  async remove(id: number) {
    const direccion = await this.findOne(id);
    return this.direccionRestauranteRepository.remove(direccion);
  }
}
