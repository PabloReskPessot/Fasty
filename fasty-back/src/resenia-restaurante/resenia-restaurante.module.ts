import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReseniaRestaurante } from './entities/resenia-restaurante.entity';
import { ReseniaRestauranteService } from './resenia-restaurante.service';
import { ReseniaRestauranteController } from './resenia-restaurante.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ReseniaRestaurante])],
  controllers: [ReseniaRestauranteController],
  providers: [ReseniaRestauranteService],
  exports: [TypeOrmModule],
})
export class ReseniaRestauranteModule {}
