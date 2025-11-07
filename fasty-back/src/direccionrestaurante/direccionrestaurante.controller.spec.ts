import { Test, TestingModule } from '@nestjs/testing';
import { DireccionrestauranteController } from './direccionrestaurante.controller';
import { DireccionrestauranteService } from './direccionrestaurante.service';

describe('DireccionrestauranteController', () => {
  let controller: DireccionrestauranteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DireccionrestauranteController],
      providers: [DireccionrestauranteService],
    }).compile();

    controller = module.get<DireccionrestauranteController>(DireccionrestauranteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
