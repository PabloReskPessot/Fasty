import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministradorBackofficeService } from './administrador-backoffice.service';
import { CreateAdministradorBackofficeDto } from './dto/create-administrador-backoffice.dto';
import { UpdateAdministradorBackofficeDto } from './dto/update-administrador-backoffice.dto';

@Controller('administrador-backoffice')
export class AdministradorBackofficeController {
  constructor(private readonly administradorBackofficeService: AdministradorBackofficeService) {}

  @Post()
  create(@Body() createAdministradorBackofficeDto: CreateAdministradorBackofficeDto) {
    return this.administradorBackofficeService.create(createAdministradorBackofficeDto);
  }

  @Get()
  findAll() {
    return this.administradorBackofficeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administradorBackofficeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdministradorBackofficeDto: UpdateAdministradorBackofficeDto) {
    return this.administradorBackofficeService.update(+id, updateAdministradorBackofficeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administradorBackofficeService.remove(+id);
  }
}
