import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plato } from './entities/plato.entity';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { PlatoService } from './plato.service';
import { PlatoController } from './plato.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Plato, Categoria])],
  controllers: [PlatoController],
  providers: [PlatoService],
  exports: [TypeOrmModule],
})
export class PlatoModule {}
