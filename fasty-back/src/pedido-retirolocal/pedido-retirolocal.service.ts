import { Injectable } from '@nestjs/common';
import { CreatePedidoRetirolocalDto } from './dto/create-pedido-retirolocal.dto';
import { UpdatePedidoRetirolocalDto } from './dto/update-pedido-retirolocal.dto';

@Injectable()
export class PedidoRetirolocalService {
  create(createPedidoRetirolocalDto: CreatePedidoRetirolocalDto) {
    return 'This action adds a new pedidoRetirolocal';
  }

  findAll() {
    return `This action returns all pedidoRetirolocal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidoRetirolocal`;
  }

  update(id: number, updatePedidoRetirolocalDto: UpdatePedidoRetirolocalDto) {
    return `This action updates a #${id} pedidoRetirolocal`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidoRetirolocal`;
  }
}
