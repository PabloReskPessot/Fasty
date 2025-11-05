import { Test, TestingModule } from '@nestjs/testing';
import { CategoriarestauranteService } from './categoriarestaurante.service';

describe('CategoriarestauranteService', () => {
  let service: CategoriarestauranteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriarestauranteService],
    }).compile();

    service = module.get<CategoriarestauranteService>(CategoriarestauranteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
