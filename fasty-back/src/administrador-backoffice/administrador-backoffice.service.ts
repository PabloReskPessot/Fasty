import { Injectable } from '@nestjs/common';
import { CreateAdministradorBackofficeDto } from './dto/create-administrador-backoffice.dto';
import { UpdateAdministradorBackofficeDto } from './dto/update-administrador-backoffice.dto';

@Injectable()
export class AdministradorBackofficeService {
  create(createAdministradorBackofficeDto: CreateAdministradorBackofficeDto) {
    return 'This action adds a new administradorBackoffice';
  }

  findAll() {
    return `This action returns all administradorBackoffice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} administradorBackoffice`;
  }

  update(id: number, updateAdministradorBackofficeDto: UpdateAdministradorBackofficeDto) {
    return `This action updates a #${id} administradorBackoffice`;
  }

  remove(id: number) {
    return `This action removes a #${id} administradorBackoffice`;
  }
}
