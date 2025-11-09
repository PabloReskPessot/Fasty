import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Direccion } from './entities/direccion.entity';
import { CreateDireccionDto } from './dto/create-direccion.dto';
import { UpdateDireccionDto } from './dto/update-direccion.dto';
import { Usuario } from '../usuarios/entities/usuario.entity';

@Injectable()
export class DireccionService {
  constructor(
    @InjectRepository(Direccion)
    private readonly direccionRepository: Repository<Direccion>,

    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  //crear
  async create(createDireccionDto: CreateDireccionDto) {
    const direccion = this.direccionRepository.create(createDireccionDto);

    if (createDireccionDto.usuarioId) {
      const usuario = await this.usuarioRepository.findOne({
        where: { usuarioID: createDireccionDto.usuarioId },
      });
      if (!usuario) {
        throw new NotFoundException('Usuario no encontrado');
      }
      direccion.usuario = usuario;
    }

    return this.direccionRepository.save(direccion);
  }

  //listar todas
  findAll() {
    return this.direccionRepository.find({
      relations: ['usuario'],
    });
  }

  // buscar
  async findOne(id: number) {
    const direccion = await this.direccionRepository.findOne({
      where: { direccionID: id },
      relations: ['usuario'],
    });
    if (!direccion) {
      throw new NotFoundException(`Dirección ${id} no encontrada`);
    }
    return direccion;
  }

  //editar
  async update(id: number, updateDireccionDto: UpdateDireccionDto) {
    const direccion = await this.findOne(id);

    Object.assign(direccion, updateDireccionDto);

    if (updateDireccionDto.usuarioId) {
      const usuario = await this.usuarioRepository.findOne({
        where: { usuarioID: updateDireccionDto.usuarioId },
      });
      if (!usuario) {
        throw new NotFoundException('Usuario no encontrado');
      }
      direccion.usuario = usuario;
    }

    return this.direccionRepository.save(direccion);
  }

  //eliminar
  async remove(id: number) {
    const direccion = await this.findOne(id);
    return this.direccionRepository.remove(direccion);
  }
}
