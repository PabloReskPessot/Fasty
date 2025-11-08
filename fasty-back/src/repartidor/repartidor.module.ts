import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repartidor } from './entities/repartidor.entity';
import { RepartidorService } from './repartidor.service';
import { RepartidorController } from './repartidor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Repartidor])],
  controllers: [RepartidorController],
  providers: [RepartidorService],
  exports: [TypeOrmModule],
})
export class RepartidorModule {}
