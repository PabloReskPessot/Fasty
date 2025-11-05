import { Module } from '@nestjs/common';
import { ReseniaRepartidorService } from './resenia-repartidor.service';
import { ReseniaRepartidorController } from './resenia-repartidor.controller';

@Module({
  controllers: [ReseniaRepartidorController],
  providers: [ReseniaRepartidorService],
})
export class ReseniaRepartidorModule {}
