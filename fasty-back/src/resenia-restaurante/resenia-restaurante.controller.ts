import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReseniaRestauranteService } from './resenia-restaurante.service';
import { CreateReseniaRestauranteDto } from './dto/create-resenia-restaurante.dto';
import { UpdateReseniaRestauranteDto } from './dto/update-resenia-restaurante.dto';

@Controller('resenia-restaurante')
export class ReseniaRestauranteController {
  constructor(private readonly reseniaRestauranteService: ReseniaRestauranteService) {}

  @Post()
  create(@Body() createReseniaRestauranteDto: CreateReseniaRestauranteDto) {
    return this.reseniaRestauranteService.create(createReseniaRestauranteDto);
  }

  @Get()
  findAll() {
    return this.reseniaRestauranteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reseniaRestauranteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReseniaRestauranteDto: UpdateReseniaRestauranteDto) {
    return this.reseniaRestauranteService.update(+id, updateReseniaRestauranteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reseniaRestauranteService.remove(+id);
  }
}
