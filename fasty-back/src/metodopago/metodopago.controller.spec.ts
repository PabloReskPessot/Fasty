import { Test, TestingModule } from '@nestjs/testing';
import { MetodopagoController } from './metodopago.controller';
import { MetodopagoService } from './metodopago.service';

describe('MetodopagoController', () => {
  let controller: MetodopagoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetodopagoController],
      providers: [MetodopagoService],
    }).compile();

    controller = module.get<MetodopagoController>(MetodopagoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
