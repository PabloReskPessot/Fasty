import { Module } from '@nestjs/common';
import { MetodopagoService } from './metodopago.service';
import { MetodopagoController } from './metodopago.controller';

@Module({
  controllers: [MetodopagoController],
  providers: [MetodopagoService],
})
export class MetodopagoModule {}
