import { Test, TestingModule } from '@nestjs/testing';
import { PedidoRetirolocalService } from './pedido-retirolocal.service';

describe('PedidoRetirolocalService', () => {
  let service: PedidoRetirolocalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidoRetirolocalService],
    }).compile();

    service = module.get<PedidoRetirolocalService>(PedidoRetirolocalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
