import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReseniaRestaurante } from './entities/resenia-restaurante.entity';
import { ReseniaRestauranteService } from './resenia-restaurante.service';
import { ReseniaRestauranteController } from './resenia-restaurante.controller';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Restaurante } from '../restaurante/entities/restaurante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReseniaRestaurante, Usuario, Restaurante])],
  controllers: [ReseniaRestauranteController],
  providers: [ReseniaRestauranteService],
  exports: [TypeOrmModule],
})
export class ReseniaRestauranteModule {}
