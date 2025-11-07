import { Injectable } from '@nestjs/common';
import { CreateDireccionrestauranteDto } from './dto/create-direccionrestaurante.dto';
import { UpdateDireccionrestauranteDto } from './dto/update-direccionrestaurante.dto';

@Injectable()
export class DireccionrestauranteService {
  create(createDireccionrestauranteDto: CreateDireccionrestauranteDto) {
    return 'This action adds a new direccionrestaurante';
  }

  findAll() {
    return `This action returns all direccionrestaurante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} direccionrestaurante`;
  }

  update(id: number, updateDireccionrestauranteDto: UpdateDireccionrestauranteDto) {
    return `This action updates a #${id} direccionrestaurante`;
  }

  remove(id: number) {
    return `This action removes a #${id} direccionrestaurante`;
  }
}
