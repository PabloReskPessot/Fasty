import { Test, TestingModule } from '@nestjs/testing';
import { ReseniaRepartidorService } from './resenia-repartidor.service';

describe('ReseniaRepartidorService', () => {
  let service: ReseniaRepartidorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReseniaRepartidorService],
    }).compile();

    service = module.get<ReseniaRepartidorService>(ReseniaRepartidorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
