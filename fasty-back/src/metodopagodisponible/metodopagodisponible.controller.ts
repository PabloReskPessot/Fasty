import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetodopagodisponibleService } from './metodopagodisponible.service';
import { CreateMetodopagodisponibleDto } from './dto/create-metodopagodisponible.dto';
import { UpdateMetodopagodisponibleDto } from './dto/update-metodopagodisponible.dto';

@Controller('metodopagodisponible')
export class MetodopagodisponibleController {
  constructor(private readonly metodopagodisponibleService: MetodopagodisponibleService) {}

  @Post()
  create(@Body() createMetodopagodisponibleDto: CreateMetodopagodisponibleDto) {
    return this.metodopagodisponibleService.create(createMetodopagodisponibleDto);
  }

  @Get()
  findAll() {
    return this.metodopagodisponibleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metodopagodisponibleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetodopagodisponibleDto: UpdateMetodopagodisponibleDto) {
    return this.metodopagodisponibleService.update(+id, updateMetodopagodisponibleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metodopagodisponibleService.remove(+id);
  }
}
