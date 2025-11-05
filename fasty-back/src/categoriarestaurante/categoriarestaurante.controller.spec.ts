import { Test, TestingModule } from '@nestjs/testing';
import { CategoriarestauranteController } from './categoriarestaurante.controller';
import { CategoriarestauranteService } from './categoriarestaurante.service';

describe('CategoriarestauranteController', () => {
  let controller: CategoriarestauranteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriarestauranteController],
      providers: [CategoriarestauranteService],
    }).compile();

    controller = module.get<CategoriarestauranteController>(CategoriarestauranteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
