import { Module } from '@nestjs/common';
import { PedidoRetirolocalService } from './pedido-retirolocal.service';
import { PedidoRetirolocalController } from './pedido-retirolocal.controller';

@Module({
  controllers: [PedidoRetirolocalController],
  providers: [PedidoRetirolocalService],
})
export class PedidoRetirolocalModule {}
