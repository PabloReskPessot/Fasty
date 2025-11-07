import { PartialType } from '@nestjs/mapped-types';
import { CreateReseniaRestauranteDto } from './create-resenia-restaurante.dto';

export class UpdateReseniaRestauranteDto extends PartialType(CreateReseniaRestauranteDto) {}
