import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoRetirolocalDto } from './create-pedido-retirolocal.dto';

export class UpdatePedidoRetirolocalDto extends PartialType(CreatePedidoRetirolocalDto) {}
