import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetodopagoService } from './metodopago.service';
import { CreateMetodopagoDto } from './dto/create-metodopago.dto';
import { UpdateMetodopagoDto } from './dto/update-metodopago.dto';

@Controller('metodo-pago')
export class MetodopagoController {
  constructor(private readonly metodopagoService: MetodopagoService) {}

  @Post()
  create(@Body() createMetodopagoDto: CreateMetodopagoDto) {
    return this.metodopagoService.create(createMetodopagoDto);
  }

  @Get()
  findAll() {
    return this.metodopagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metodopagoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetodopagoDto: UpdateMetodopagoDto) {
    return this.metodopagoService.update(+id, updateMetodopagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metodopagoService.remove(+id);
  }
}
