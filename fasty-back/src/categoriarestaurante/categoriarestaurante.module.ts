import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaRestaurante } from './entities/categoriarestaurante.entity';
import { CategoriarestauranteService } from './categoriarestaurante.service';
import { CategoriarestauranteController } from './categoriarestaurante.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaRestaurante])],
  controllers: [CategoriarestauranteController],
  providers: [CategoriarestauranteService],
  exports: [TypeOrmModule],
})
export class CategoriaRestauranteModule {}
