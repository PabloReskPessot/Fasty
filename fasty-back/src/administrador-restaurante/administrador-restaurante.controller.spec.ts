import { Test, TestingModule } from '@nestjs/testing';
import { AdministradorRestauranteController } from './administrador-restaurante.controller';
import { AdministradorRestauranteService } from './administrador-restaurante.service';

describe('AdministradorRestauranteController', () => {
  let controller: AdministradorRestauranteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdministradorRestauranteController],
      providers: [AdministradorRestauranteService],
    }).compile();

    controller = module.get<AdministradorRestauranteController>(AdministradorRestauranteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
