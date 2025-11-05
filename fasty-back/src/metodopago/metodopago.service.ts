import { Injectable } from '@nestjs/common';
import { CreateMetodopagoDto } from './dto/create-metodopago.dto';
import { UpdateMetodopagoDto } from './dto/update-metodopago.dto';

@Injectable()
export class MetodopagoService {
  create(createMetodopagoDto: CreateMetodopagoDto) {
    return 'This action adds a new metodopago';
  }

  findAll() {
    return `This action returns all metodopago`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metodopago`;
  }

  update(id: number, updateMetodopagoDto: UpdateMetodopagoDto) {
    return `This action updates a #${id} metodopago`;
  }

  remove(id: number) {
    return `This action removes a #${id} metodopago`;
  }
}
