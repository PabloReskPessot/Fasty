import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoPago } from './entities/metodopago.entity';
import { MetodopagoService } from './metodopago.service';
import { MetodopagoController } from './metodopago.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MetodoPago])],
  controllers: [MetodopagoController],
  providers: [MetodopagoService],
  exports: [TypeOrmModule],
})
export class MetodoPagoModule {}
