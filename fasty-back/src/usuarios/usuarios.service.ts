import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  //crear
  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  //listar todos
  findAll() {
    return this.usuarioRepository.find({
      relations: ['direcciones', 'pedidos', 'reseniaRestaurantes', 'reseniaRepartidores', 'metodosPago'],
    });
  }

  //buscar por id
  async findOne(id: number) {
    const usuario = await this.usuarioRepository.findOne({
      where: { usuarioID: id },
      relations: ['direcciones', 'pedidos', 'reseniaRestaurantes', 'reseniaRepartidores', 'metodosPago'],
    });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }

  //editar
  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.findOne(id);
    Object.assign(usuario, updateUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  //eliminar
  async remove(id: number) {
    const usuario = await this.findOne(id);
    return this.usuarioRepository.remove(usuario);
  }
}
