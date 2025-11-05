import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReseniaRepartidorService } from './resenia-repartidor.service';
import { CreateReseniaRepartidorDto } from './dto/create-resenia-repartidor.dto';
import { UpdateReseniaRepartidorDto } from './dto/update-resenia-repartidor.dto';

@Controller('resenia-repartidor')
export class ReseniaRepartidorController {
  constructor(private readonly reseniaRepartidorService: ReseniaRepartidorService) {}

  @Post()
  create(@Body() createReseniaRepartidorDto: CreateReseniaRepartidorDto) {
    return this.reseniaRepartidorService.create(createReseniaRepartidorDto);
  }

  @Get()
  findAll() {
    return this.reseniaRepartidorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reseniaRepartidorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReseniaRepartidorDto: UpdateReseniaRepartidorDto) {
    return this.reseniaRepartidorService.update(+id, updateReseniaRepartidorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reseniaRepartidorService.remove(+id);
  }
}
