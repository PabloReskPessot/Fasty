import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DireccionRestaurante } from './entities/direccionrestaurante.entity';
import { DireccionrestauranteService } from './direccionrestaurante.service';
import { DireccionrestauranteController } from './direccionrestaurante.controller';
import { Restaurante } from '../restaurante/entities/restaurante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DireccionRestaurante, Restaurante])],
  controllers: [DireccionrestauranteController],
  providers: [DireccionrestauranteService],
  exports: [TypeOrmModule],
})
export class DireccionRestauranteModule {}
