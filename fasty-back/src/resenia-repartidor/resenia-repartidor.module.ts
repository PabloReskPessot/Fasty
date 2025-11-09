import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReseniaRepartidor } from './entities/resenia-repartidor.entity';
import { ReseniaRepartidorService } from './resenia-repartidor.service';
import { ReseniaRepartidorController } from './resenia-repartidor.controller';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Repartidor } from '../repartidor/entities/repartidor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReseniaRepartidor, Usuario, Repartidor])],
  controllers: [ReseniaRepartidorController],
  providers: [ReseniaRepartidorService],
  exports: [TypeOrmModule],
})
export class ReseniaRepartidorModule {}
