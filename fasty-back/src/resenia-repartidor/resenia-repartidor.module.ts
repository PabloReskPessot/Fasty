import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReseniaRepartidor } from './entities/resenia-repartidor.entity';
import { ReseniaRepartidorService } from './resenia-repartidor.service';
import { ReseniaRepartidorController } from './resenia-repartidor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ReseniaRepartidor])],
  controllers: [ReseniaRepartidorController],
  providers: [ReseniaRepartidorService],
  exports: [TypeOrmModule],
})
export class ReseniaRepartidorModule {}
