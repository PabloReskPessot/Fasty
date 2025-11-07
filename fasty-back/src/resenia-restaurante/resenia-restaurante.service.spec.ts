import { Test, TestingModule } from '@nestjs/testing';
import { ReseniaRestauranteService } from './resenia-restaurante.service';

describe('ReseniaRestauranteService', () => {
  let service: ReseniaRestauranteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReseniaRestauranteService],
    }).compile();

    service = module.get<ReseniaRestauranteService>(ReseniaRestauranteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
