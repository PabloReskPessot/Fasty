import { Test, TestingModule } from '@nestjs/testing';
import { MetodopagodisponibleService } from './metodopagodisponible.service';

describe('MetodopagodisponibleService', () => {
  let service: MetodopagodisponibleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetodopagodisponibleService],
    }).compile();

    service = module.get<MetodopagodisponibleService>(MetodopagodisponibleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
