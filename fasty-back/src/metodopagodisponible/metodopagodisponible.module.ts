import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoPagoDisponible } from './entities/metodopagodisponible.entity';
import { MetodopagodisponibleController } from './metodopagodisponible.controller';
import { MetodopagodisponibleService } from './metodopagodisponible.service';

@Module({
  imports: [TypeOrmModule.forFeature([MetodoPagoDisponible])],
  controllers: [MetodopagodisponibleController],
  providers: [MetodopagodisponibleService],
  exports: [TypeOrmModule],
})
export class MetodoPagoDisponibleModule {}
