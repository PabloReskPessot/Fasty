import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministradorRestauranteService } from './administrador-restaurante.service';
import { CreateAdministradorRestauranteDto } from './dto/create-administrador-restaurante.dto';
import { UpdateAdministradorRestauranteDto } from './dto/update-administrador-restaurante.dto';

@Controller('administrador-restaurante')
export class AdministradorRestauranteController {
  constructor(private readonly administradorRestauranteService: AdministradorRestauranteService) {}

  @Post()
  create(@Body() createAdministradorRestauranteDto: CreateAdministradorRestauranteDto) {
    return this.administradorRestauranteService.create(createAdministradorRestauranteDto);
  }

  @Get()
  findAll() {
    return this.administradorRestauranteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administradorRestauranteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdministradorRestauranteDto: UpdateAdministradorRestauranteDto) {
    return this.administradorRestauranteService.update(+id, updateAdministradorRestauranteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administradorRestauranteService.remove(+id);
  }
}
