import { Test, TestingModule } from '@nestjs/testing';
import { MetodopagodisponibleController } from './metodopagodisponible.controller';
import { MetodopagodisponibleService } from './metodopagodisponible.service';

describe('MetodopagodisponibleController', () => {
  let controller: MetodopagodisponibleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetodopagodisponibleController],
      providers: [MetodopagodisponibleService],
    }).compile();

    controller = module.get<MetodopagodisponibleController>(MetodopagodisponibleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
