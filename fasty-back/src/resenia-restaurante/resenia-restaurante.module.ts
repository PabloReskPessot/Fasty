import { Module } from '@nestjs/common';
import { ReseniaRestauranteService } from './resenia-restaurante.service';
import { ReseniaRestauranteController } from './resenia-restaurante.controller';

@Module({
  controllers: [ReseniaRestauranteController],
  providers: [ReseniaRestauranteService],
})
export class ReseniaRestauranteModule {}
