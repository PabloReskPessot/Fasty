import { Module } from '@nestjs/common';
import { AdministradorRestauranteService } from './administrador-restaurante.service';
import { AdministradorRestauranteController } from './administrador-restaurante.controller';

@Module({
  controllers: [AdministradorRestauranteController],
  providers: [AdministradorRestauranteService],
})
export class AdministradorRestauranteModule {}
