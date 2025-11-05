import { Test, TestingModule } from '@nestjs/testing';
import { AdministradorBackofficeService } from './administrador-backoffice.service';

describe('AdministradorBackofficeService', () => {
  let service: AdministradorBackofficeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdministradorBackofficeService],
    }).compile();

    service = module.get<AdministradorBackofficeService>(AdministradorBackofficeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
