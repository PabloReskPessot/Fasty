import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurante } from './entities/restaurante.entity';
import { CategoriaRestaurante } from '../categoriarestaurante/entities/categoriarestaurante.entity';
import { RestauranteService } from './restaurante.service';
import { RestauranteController } from './restaurante.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurante, CategoriaRestaurante])],
  controllers: [RestauranteController],
  providers: [RestauranteService],
  exports: [TypeOrmModule],
})
export class RestauranteModule {}
