import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Descuento } from './entities/descuento.entity';
import { DescuentoService } from './descuento.service';
import { DescuentoController } from './descuento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Descuento])],
  controllers: [DescuentoController],
  providers: [DescuentoService],
  exports: [TypeOrmModule],
})
export class DescuentoModule {}
