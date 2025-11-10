import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoRetirolocalService } from './pedido-retirolocal.service';
import { CreatePedidoRetirolocalDto } from './dto/create-pedido-retirolocal.dto';
import { UpdatePedidoRetirolocalDto } from './dto/update-pedido-retirolocal.dto';

@Controller('pedido-retirolocal')
export class PedidoRetirolocalController {
  constructor(private readonly pedidoRetirolocalService: PedidoRetirolocalService) {}

  @Post()
  create(@Body() createPedidoRetirolocalDto: CreatePedidoRetirolocalDto) {
    return this.pedidoRetirolocalService.create(createPedidoRetirolocalDto);
  }

  @Get()
  findAll() {
    return this.pedidoRetirolocalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoRetirolocalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoRetirolocalDto: UpdatePedidoRetirolocalDto) {
    return this.pedidoRetirolocalService.update(+id, updatePedidoRetirolocalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoRetirolocalService.remove(+id);
  }
}
