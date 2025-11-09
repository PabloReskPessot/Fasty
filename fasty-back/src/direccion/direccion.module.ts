import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Direccion } from './entities/direccion.entity';
import { DireccionService } from './direccion.service';
import { DireccionController } from './direccion.controller';
import { Usuario } from '../usuarios/entities/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Direccion, Usuario])],
  controllers: [DireccionController],
  providers: [DireccionService],
  exports: [TypeOrmModule],
})
export class DireccionModule {}
