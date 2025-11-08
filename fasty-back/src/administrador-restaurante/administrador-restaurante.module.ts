import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministradorRestaurante } from './entities/administrador-restaurante.entity';
import { AdministradorRestauranteService } from './administrador-restaurante.service';
import { AdministradorRestauranteController } from './administrador-restaurante.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AdministradorRestaurante])],
  controllers: [AdministradorRestauranteController],
  providers: [AdministradorRestauranteService],
  exports: [TypeOrmModule],
})
export class AdministradorRestauranteModule {}
