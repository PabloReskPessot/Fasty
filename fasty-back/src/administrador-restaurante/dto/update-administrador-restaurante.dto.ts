import { PartialType } from '@nestjs/mapped-types';
import { CreateAdministradorRestauranteDto } from './create-administrador-restaurante.dto';

export class UpdateAdministradorRestauranteDto extends PartialType(CreateAdministradorRestauranteDto) {}
