import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { RestauranteService } from './restaurante.service';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { Categoria } from 'src/categoria/entities/categoria.entity';

@Controller('restaurante')
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService) {}

  @Post()
  create(@Body() createRestauranteDto: CreateRestauranteDto) {
    return this.restauranteService.create(createRestauranteDto);
  }

  @Get()
  findAll() {
    return this.restauranteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restauranteService.findOne(+id);
  }

  // GET /restaurantes/search?nombre=nombrerestaurante  # Buscar por nombre
  @Get('search')
  async findByName(@Query('nombre') nombre: string) {
    return this.restauranteService.findByName(nombre);
  }

  // GET /restaurantes/1/menu # Obtener el menú completo de un restaurante
  @Get(':id/menu')
  async getMenuCompleto(@Param('id', ParseIntPipe) id: number) {
    return this.restauranteService.getMenuCompleto(id);
  }

  // GET /restaurantes/categoria/1  # Buscar por categoría
  @Get('categoria/:id')
  async findByCategoria(@Param('id', ParseIntPipe) id: number) {
    return this.restauranteService.findByCategoria(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestauranteDto: UpdateRestauranteDto) {
    return this.restauranteService.update(+id, updateRestauranteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restauranteService.remove(+id);
  }
}
