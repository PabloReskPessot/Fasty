import { Test, TestingModule } from '@nestjs/testing';
import { DireccionrestauranteService } from './direccionrestaurante.service';

describe('DireccionrestauranteService', () => {
  let service: DireccionrestauranteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DireccionrestauranteService],
    }).compile();

    service = module.get<DireccionrestauranteService>(DireccionrestauranteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
