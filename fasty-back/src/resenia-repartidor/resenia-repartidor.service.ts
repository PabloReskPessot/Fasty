import { Injectable } from '@nestjs/common';
import { CreateReseniaRepartidorDto } from './dto/create-resenia-repartidor.dto';
import { UpdateReseniaRepartidorDto } from './dto/update-resenia-repartidor.dto';

@Injectable()
export class ReseniaRepartidorService {
  create(createReseniaRepartidorDto: CreateReseniaRepartidorDto) {
    return 'This action adds a new reseniaRepartidor';
  }

  findAll() {
    return `This action returns all reseniaRepartidor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reseniaRepartidor`;
  }

  update(id: number, updateReseniaRepartidorDto: UpdateReseniaRepartidorDto) {
    return `This action updates a #${id} reseniaRepartidor`;
  }

  remove(id: number) {
    return `This action removes a #${id} reseniaRepartidor`;
  }
}
