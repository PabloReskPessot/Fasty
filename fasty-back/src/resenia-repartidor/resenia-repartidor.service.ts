import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReseniaRepartidor } from './entities/resenia-repartidor.entity';
import { CreateReseniaRepartidorDto } from './dto/create-resenia-repartidor.dto';
import { UpdateReseniaRepartidorDto } from './dto/update-resenia-repartidor.dto';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Repartidor } from '../repartidor/entities/repartidor.entity';

@Injectable()
export class ReseniaRepartidorService {
  constructor(
    @InjectRepository(ReseniaRepartidor)
    private readonly reseniaRepo: Repository<ReseniaRepartidor>,
    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,
    @InjectRepository(Repartidor)
    private readonly repartidorRepo: Repository<Repartidor>,
  ) {}

  async create(createDto: CreateReseniaRepartidorDto) {
    const usuario = await this.usuarioRepo.findOne({
      where: { usuarioID: createDto.usuarioID },
    });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    const repartidor = await this.repartidorRepo.findOne({
      where: { repartidorID: createDto.repartidorID },
    });
    if (!repartidor) throw new NotFoundException('Repartidor no encontrado');

    const nuevaResenia = this.reseniaRepo.create({
      usuario,
      repartidor,
      puntuacion: createDto.puntuacion,
      descripcion: createDto.descripcion,
    });

    return this.reseniaRepo.save(nuevaResenia);
  }
//listar todas
  async findAll() {
    return this.reseniaRepo.find({
      relations: ['usuario', 'repartidor'],
    });
  }

  async findOne(id: number) {
    const resenia = await this.reseniaRepo.findOne({
      where: { reseniaRepartidorID: id },
      relations: ['usuario', 'repartidor'],
    });
    if (!resenia) throw new NotFoundException(`Reseña con ID ${id} no encontrada`);
    return resenia;
  }

  async update(id: number, updateDto: UpdateReseniaRepartidorDto) {
    const resenia = await this.findOne(id);

    if (updateDto.puntuacion !== undefined)
      resenia.puntuacion = updateDto.puntuacion;
    if (updateDto.descripcion !== undefined)
      resenia.descripcion = updateDto.descripcion;

    // (opcional) actualizar usuario o repartidor si viene el id
    if (updateDto.usuarioID) {
      const usuario = await this.usuarioRepo.findOne({
        where: { usuarioID: updateDto.usuarioID },
      });
      if (!usuario) throw new NotFoundException('Usuario no encontrado');
      resenia.usuario = usuario;
    }

    if (updateDto.repartidorID) {
      const repartidor = await this.repartidorRepo.findOne({
        where: { repartidorID: updateDto.repartidorID },
      });
      if (!repartidor) throw new NotFoundException('Repartidor no encontrado');
      resenia.repartidor = repartidor;
    }

    return this.reseniaRepo.save(resenia);
  }

  async remove(id: number) {
    const resenia = await this.findOne(id);
    return this.reseniaRepo.remove(resenia);
  }
}
