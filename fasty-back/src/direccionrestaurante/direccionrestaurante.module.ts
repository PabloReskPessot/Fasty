// src/modules/direccion-restaurante/direccion-restaurante.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DireccionRestaurante } from './entities/direccionrestaurante.entity';
import { DireccionrestauranteService } from './direccionrestaurante.service';
import { DireccionrestauranteController } from './direccionrestaurante.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DireccionRestaurante])],
  controllers: [DireccionrestauranteController],
  providers: [DireccionrestauranteService],
  exports: [TypeOrmModule],
})
export class DireccionRestauranteModule {}
