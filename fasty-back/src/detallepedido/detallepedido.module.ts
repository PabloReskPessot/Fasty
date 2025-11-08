import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePedido } from './entities/detallepedido.entity';
import { DetallepedidoService } from './detallepedido.service';
import { DetallepedidoController } from './detallepedido.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DetallePedido])],
  controllers: [DetallepedidoController],
  providers: [DetallepedidoService],
  exports: [TypeOrmModule],
})
export class DetallepedidoModule {}