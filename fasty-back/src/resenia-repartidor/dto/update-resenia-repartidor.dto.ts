import { PartialType } from '@nestjs/mapped-types';
import { CreateReseniaRepartidorDto } from './create-resenia-repartidor.dto';

export class UpdateReseniaRepartidorDto extends PartialType(CreateReseniaRepartidorDto) {}
