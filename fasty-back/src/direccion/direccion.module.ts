import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Direccion } from './entities/direccion.entity';
import { DireccionService } from './direccion.service';
import { DireccionController } from './direccion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Direccion])],
  controllers: [DireccionController],
  providers: [DireccionService],
  exports: [TypeOrmModule],
})
export class DireccionModule {}