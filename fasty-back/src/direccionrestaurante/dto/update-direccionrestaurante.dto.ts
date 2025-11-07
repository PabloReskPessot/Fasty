import { PartialType } from '@nestjs/mapped-types';
import { CreateDireccionrestauranteDto } from './create-direccionrestaurante.dto';

export class UpdateDireccionrestauranteDto extends PartialType(CreateDireccionrestauranteDto) {}
