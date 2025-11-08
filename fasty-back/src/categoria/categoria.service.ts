import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  //crear una categoría
  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const nuevaCategoria = this.categoriaRepository.create(createCategoriaDto);
    return await this.categoriaRepository.save(nuevaCategoria);
  }

//listar
  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      relations: ['platos'], // trae los platos relacionados si querés verlos
    });
  }

  //buscar por id
  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({
      where: { categoriaID: id },
      relations: ['platos'],
    });
    if (!categoria) {
      throw new NotFoundException(`Categoría ${id} no encontrada`);
    }
    return categoria;
  }

  //editar
  async update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    const categoria = await this.findOne(id);
    const actualizada = Object.assign(categoria, updateCategoriaDto);
    return await this.categoriaRepository.save(actualizada);
  }

  //eliminar
  async remove(id: number): Promise<string> {
    const categoria = await this.findOne(id);
    await this.categoriaRepository.remove(categoria);
    return `Categoría ${id} eliminada correctamente`;
  }
}
