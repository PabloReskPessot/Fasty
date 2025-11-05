import { Test, TestingModule } from '@nestjs/testing';
import { AdministradorBackofficeController } from './administrador-backoffice.controller';
import { AdministradorBackofficeService } from './administrador-backoffice.service';

describe('AdministradorBackofficeController', () => {
  let controller: AdministradorBackofficeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdministradorBackofficeController],
      providers: [AdministradorBackofficeService],
    }).compile();

    controller = module.get<AdministradorBackofficeController>(AdministradorBackofficeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
