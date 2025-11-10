import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReseniaRestaurante } from './entities/resenia-restaurante.entity';
import { CreateReseniaRestauranteDto } from './dto/create-resenia-restaurante.dto';
import { UpdateReseniaRestauranteDto } from './dto/update-resenia-restaurante.dto';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Restaurante } from '../restaurante/entities/restaurante.entity';

@Injectable()
export class ReseniaRestauranteService {
  constructor(
    @InjectRepository(ReseniaRestaurante)
    private readonly reseniaRepo: Repository<ReseniaRestaurante>,
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
    @InjectRepository(Restaurante)
    private readonly restauranteRepo: Repository<Restaurante>,
  ) {}

  async create(createDto: CreateReseniaRestauranteDto) {
    const usuario = await this.usuarioRepo.findOne({
      where: { usuarioID: createDto.usuarioID },
    });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    const restaurante = await this.restauranteRepo.findOne({
      where: { restauranteID: createDto.restauranteID },
    });
    if (!restaurante) throw new NotFoundException('Restaurante no encontrado');

    const nuevaResenia = this.reseniaRepo.create({
      usuario,
      restaurante,
      puntuacion: createDto.puntuacion,
      descripcion: createDto.descripcion,
    });
    
    // aca iria la logica para actualizar el promedio de puntuacion del restaurante
    // por ejemplo, podrías calcular el promedio de todas las reseñas del restaurante
    // y actualizar un campo en la base de datos

    return this.reseniaRepo.save(nuevaResenia);
  }

  async findAll() {
    return this.reseniaRepo.find({
      relations: ['usuario', 'restaurante'],
    });
  }

  async findOne(id: number) {
    const resenia = await this.reseniaRepo.findOne({
      where: { reseniaRestauranteID: id },
      relations: ['usuario', 'restaurante'],
    });
    if (!resenia) throw new NotFoundException(`Reseña ${id} no encontrada`);
    return resenia;
  }

  async update(id: number, updateDto: UpdateReseniaRestauranteDto) {
    const resenia = await this.findOne(id);

    if (updateDto.puntuacion !== undefined)
      resenia.puntuacion = updateDto.puntuacion;
    if (updateDto.descripcion !== undefined)
      resenia.descripcion = updateDto.descripcion;

    if (updateDto.usuarioID) {
      const usuario = await this.usuarioRepo.findOne({
        where: { usuarioID: updateDto.usuarioID },
      });
      if (!usuario) throw new NotFoundException('Usuario no encontrado');
      resenia.usuario = usuario;
    }

    if (updateDto.restauranteID) {
      const restaurante = await this.restauranteRepo.findOne({
        where: { restauranteID: updateDto.restauranteID },
      });
      if (!restaurante) throw new NotFoundException('Restaurante no encontrado');
      resenia.restaurante = restaurante;
    }

    return this.reseniaRepo.save(resenia);
  }

  async remove(id: number) {
    const resenia = await this.findOne(id);
    return this.reseniaRepo.remove(resenia);
  }
}
