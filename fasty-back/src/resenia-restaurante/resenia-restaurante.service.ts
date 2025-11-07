import { Injectable } from '@nestjs/common';
import { CreateReseniaRestauranteDto } from './dto/create-resenia-restaurante.dto';
import { UpdateReseniaRestauranteDto } from './dto/update-resenia-restaurante.dto';

@Injectable()
export class ReseniaRestauranteService {
  create(createReseniaRestauranteDto: CreateReseniaRestauranteDto) {
    return 'This action adds a new reseniaRestaurante';
  }

  findAll() {
    return `This action returns all reseniaRestaurante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reseniaRestaurante`;
  }

  update(id: number, updateReseniaRestauranteDto: UpdateReseniaRestauranteDto) {
    return `This action updates a #${id} reseniaRestaurante`;
  }

  remove(id: number) {
    return `This action removes a #${id} reseniaRestaurante`;
  }
}
