import { Test, TestingModule } from '@nestjs/testing';
import { AdministradorRestauranteService } from './administrador-restaurante.service';

describe('AdministradorRestauranteService', () => {
  let service: AdministradorRestauranteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdministradorRestauranteService],
    }).compile();

    service = module.get<AdministradorRestauranteService>(AdministradorRestauranteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
