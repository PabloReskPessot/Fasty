import { Module } from '@nestjs/common';
import { PlatoService } from './plato.service';
import { PlatoController } from './plato.controller';

@Module({
  controllers: [PlatoController],
  providers: [PlatoService],
})
export class PlatoModule {}
