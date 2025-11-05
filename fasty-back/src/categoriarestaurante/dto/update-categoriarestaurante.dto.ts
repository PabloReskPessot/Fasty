import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriarestauranteDto } from './create-categoriarestaurante.dto';

export class UpdateCategoriarestauranteDto extends PartialType(CreateCategoriarestauranteDto) {}
