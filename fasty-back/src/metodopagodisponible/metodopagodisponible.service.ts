import { Injectable } from '@nestjs/common';
import { CreateMetodopagodisponibleDto } from './dto/create-metodopagodisponible.dto';
import { UpdateMetodopagodisponibleDto } from './dto/update-metodopagodisponible.dto';

@Injectable()
export class MetodopagodisponibleService {
  create(createMetodopagodisponibleDto: CreateMetodopagodisponibleDto) {
    return 'This action adds a new metodopagodisponible';
  }

  findAll() {
    return `This action returns all metodopagodisponible`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metodopagodisponible`;
  }

  update(id: number, updateMetodopagodisponibleDto: UpdateMetodopagodisponibleDto) {
    return `This action updates a #${id} metodopagodisponible`;
  }

  remove(id: number) {
    return `This action removes a #${id} metodopagodisponible`;
  }
}
