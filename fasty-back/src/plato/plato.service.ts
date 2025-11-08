import { Injectable } from '@nestjs/common';
import { CreatePlatoDto } from './dto/create-plato.dto';
import { UpdatePlatoDto } from './dto/update-plato.dto';

@Injectable()
export class PlatoService {

  // esto lo dejo aca para ir adelantando, despues adaptalo a como lo vas a usar, es para que recuerdes que total se calcula cuando creas el plato y es el precio menos el descuento
  // platos.service.ts
  // create(dto: CreatePlatoDto) {
  // const plato = this.platoRepository.create(dto);
  // plato.total = plato.precio * (1 - plato.porcentajeDescuento / 100);
  // return this.platoRepository.save(plato);
  // }

  create(createPlatoDto: CreatePlatoDto) {
    return 'This action adds a new plato';
  }
  

  findAll() {
    return `This action returns all plato`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plato`;
  }

  update(id: number, updatePlatoDto: UpdatePlatoDto) {
    return `This action updates a #${id} plato`;
  }

  remove(id: number) {
    return `This action removes a #${id} plato`;
  }

  

}
