import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DireccionrestauranteService } from './direccionrestaurante.service';
import { CreateDireccionrestauranteDto } from './dto/create-direccionrestaurante.dto';
import { UpdateDireccionrestauranteDto } from './dto/update-direccionrestaurante.dto';

@Controller('direccionrestaurante')
export class DireccionrestauranteController {
  constructor(private readonly direccionrestauranteService: DireccionrestauranteService) {}

  @Post()
  create(@Body() createDireccionrestauranteDto: CreateDireccionrestauranteDto) {
    return this.direccionrestauranteService.create(createDireccionrestauranteDto);
  }

  @Get()
  findAll() {
    return this.direccionrestauranteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.direccionrestauranteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDireccionrestauranteDto: UpdateDireccionrestauranteDto) {
    return this.direccionrestauranteService.update(+id, updateDireccionrestauranteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.direccionrestauranteService.remove(+id);
  }
}
