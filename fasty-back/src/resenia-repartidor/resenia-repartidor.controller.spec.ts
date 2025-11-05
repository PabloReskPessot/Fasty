import { Test, TestingModule } from '@nestjs/testing';
import { ReseniaRepartidorController } from './resenia-repartidor.controller';
import { ReseniaRepartidorService } from './resenia-repartidor.service';

describe('ReseniaRepartidorController', () => {
  let controller: ReseniaRepartidorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReseniaRepartidorController],
      providers: [ReseniaRepartidorService],
    }).compile();

    controller = module.get<ReseniaRepartidorController>(ReseniaRepartidorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
