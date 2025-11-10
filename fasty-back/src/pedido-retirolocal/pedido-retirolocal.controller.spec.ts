import { Test, TestingModule } from '@nestjs/testing';
import { PedidoRetirolocalController } from './pedido-retirolocal.controller';
import { PedidoRetirolocalService } from './pedido-retirolocal.service';

describe('PedidoRetirolocalController', () => {
  let controller: PedidoRetirolocalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidoRetirolocalController],
      providers: [PedidoRetirolocalService],
    }).compile();

    controller = module.get<PedidoRetirolocalController>(PedidoRetirolocalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
