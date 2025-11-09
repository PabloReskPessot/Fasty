import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

// en el front se arma un carrito en memoria que guarda los items y se envia todo a la creacion de pedido

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  // en el dto de creacion van los items del pedido tambien
  // aparte se calculan totales pedido que es la suma de los items + envio + impuestos - descuentos, todo se hace desde aca 
  // a lo mejor las buenas practicas dicen que eso no va en el service? no se si existe algun Repository o modelo para estos calculos para mantenerlos separados
  @Post()
  create(@Body() createPedidoDto: CreatePedidoDto) {
    return this.pedidoService.create(createPedidoDto);
  }

  @Get()
  findAll() {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {
    return this.pedidoService.update(+id, updatePedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoService.remove(+id);
  }
}
