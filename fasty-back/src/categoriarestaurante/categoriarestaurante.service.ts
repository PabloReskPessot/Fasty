import { Injectable } from '@nestjs/common';
import { CreateCategoriarestauranteDto } from './dto/create-categoriarestaurante.dto';
import { UpdateCategoriarestauranteDto } from './dto/update-categoriarestaurante.dto';

@Injectable()
export class CategoriarestauranteService {
  create(createCategoriarestauranteDto: CreateCategoriarestauranteDto) {
    return 'This action adds a new categoriarestaurante';
  }

  findAll() {
    return `This action returns all categoriarestaurante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriarestaurante`;
  }

  update(id: number, updateCategoriarestauranteDto: UpdateCategoriarestauranteDto) {
    return `This action updates a #${id} categoriarestaurante`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriarestaurante`;
  }
}
