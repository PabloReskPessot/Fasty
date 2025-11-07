import { Module } from '@nestjs/common';
import { DireccionrestauranteService } from './direccionrestaurante.service';
import { DireccionrestauranteController } from './direccionrestaurante.controller';

@Module({
  controllers: [DireccionrestauranteController],
  providers: [DireccionrestauranteService],
})
export class DireccionrestauranteModule {}
