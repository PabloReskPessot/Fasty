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
      relations: ['categoria', 'direccionRestaurante', 'platos'], where: { activo: true }
    });
  }

  async findOne(id: number): Promise<Restaurante> {
    const restaurante = await this.restauranteRepository.findOne({
      where: { restauranteID: id },
      relations: ['categoria', 'direccionRestaurante', 'platos'],
    });

    if (!restaurante) {
      throw new NotFoundException(`Restaurante con ID ${id} no encontrado`);
    }

    return restaurante;
  }

  async findByName(nombre: string): Promise<Restaurante[]> {
    return this.restauranteRepository.find({
      where: {
        nombre: Like(`%${nombre}%`),
        activo: true
      },
      relations: ['categoria','direccionRestaurante', 'platos']
    });
  }

  async findByCategoria(categoriaId: number): Promise<Restaurante[]> {
    return this.restauranteRepository.find({
      where: { categoria: { categoriaRestauranteID: categoriaId }, activo: true },
      relations: ['categoria', 'direccionRestaurante','platos']
    });
  }

  async getMenuCompleto(restauranteId: number): Promise<any> {
    const restaurante = await this.restauranteRepository.findOne({
      where: { restauranteID: restauranteId, activo: true },
      relations: [
        'platos',
        'platos.categoria',
        'direccionRestaurante'
      ]
    });

    if (!restaurante) {
      throw new NotFoundException(`Restaurante con ID ${restauranteId} no encontrado`);
    }

    // Agrupar platos por categoría
    const menuPorCategoria = {};
    restaurante.platos
      .filter(plato => plato.activo)
      .forEach(plato => {
        const categoriaNombre = plato.categoria.tipoComida;
        if (!menuPorCategoria[categoriaNombre]) {
          menuPorCategoria[categoriaNombre] = [];
        }
        menuPorCategoria[categoriaNombre].push(plato);
      });

    return {
      restaurante: {
        id: restaurante.restauranteID,
        nombre: restaurante.nombre,
        direccion: restaurante.direccionRestaurante
      },
      menu: menuPorCategoria
    };
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
