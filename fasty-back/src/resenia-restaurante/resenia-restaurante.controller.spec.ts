import { Test, TestingModule } from '@nestjs/testing';
import { ReseniaRestauranteController } from './resenia-restaurante.controller';
import { ReseniaRestauranteService } from './resenia-restaurante.service';

describe('ReseniaRestauranteController', () => {
  let controller: ReseniaRestauranteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReseniaRestauranteController],
      providers: [ReseniaRestauranteService],
    }).compile();

    controller = module.get<ReseniaRestauranteController>(ReseniaRestauranteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
