import { Module } from '@nestjs/common';
import { AdministradorBackofficeService } from './administrador-backoffice.service';
import { AdministradorBackofficeController } from './administrador-backoffice.controller';

@Module({
  controllers: [AdministradorBackofficeController],
  providers: [AdministradorBackofficeService],
})
export class AdministradorBackofficeModule {}
