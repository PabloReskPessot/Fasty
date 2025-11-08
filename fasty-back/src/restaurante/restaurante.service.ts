import { Injectable, NotFoundException  } from '@nestjs/common';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Restaurante } from './entities/restaurante.entity';

@Injectable()
export class RestauranteService {

  constructor(
    @InjectRepository(Restaurante)
    private restauranteRepository: Repository<Restaurante>,
  ) {}

  create(createRestauranteDto: CreateRestauranteDto) {
    return 'This action adds a new restaurante';
  }





  update(id: number, updateRestauranteDto: UpdateRestauranteDto) {
    return `This action updates a #${id} restaurante`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurante`;
  }

  


}
