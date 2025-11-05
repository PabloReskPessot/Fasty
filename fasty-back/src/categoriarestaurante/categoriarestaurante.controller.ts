import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriarestauranteService } from './categoriarestaurante.service';
import { CreateCategoriarestauranteDto } from './dto/create-categoriarestaurante.dto';
import { UpdateCategoriarestauranteDto } from './dto/update-categoriarestaurante.dto';

@Controller('categoriarestaurante')
export class CategoriarestauranteController {
  constructor(private readonly categoriarestauranteService: CategoriarestauranteService) {}

  @Post()
  create(@Body() createCategoriarestauranteDto: CreateCategoriarestauranteDto) {
    return this.categoriarestauranteService.create(createCategoriarestauranteDto);
  }

  @Get()
  findAll() {
    return this.categoriarestauranteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriarestauranteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriarestauranteDto: UpdateCategoriarestauranteDto) {
    return this.categoriarestauranteService.update(+id, updateCategoriarestauranteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriarestauranteService.remove(+id);
  }
}
