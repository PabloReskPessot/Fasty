import { Module } from '@nestjs/common';
import { CategoriarestauranteService } from './categoriarestaurante.service';
import { CategoriarestauranteController } from './categoriarestaurante.controller';

@Module({
  controllers: [CategoriarestauranteController],
  providers: [CategoriarestauranteService],
})
export class CategoriarestauranteModule {}
