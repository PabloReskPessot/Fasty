import { Injectable } from '@nestjs/common';
import { CreateAdministradorRestauranteDto } from './dto/create-administrador-restaurante.dto';
import { UpdateAdministradorRestauranteDto } from './dto/update-administrador-restaurante.dto';

@Injectable()
export class AdministradorRestauranteService {
  create(createAdministradorRestauranteDto: CreateAdministradorRestauranteDto) {
    return 'This action adds a new administradorRestaurante';
  }

  findAll() {
    return `This action returns all administradorRestaurante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} administradorRestaurante`;
  }

  update(id: number, updateAdministradorRestauranteDto: UpdateAdministradorRestauranteDto) {
    return `This action updates a #${id} administradorRestaurante`;
  }

  remove(id: number) {
    return `This action removes a #${id} administradorRestaurante`;
  }
}
