import { PartialType } from '@nestjs/mapped-types';
import { CreateMetodopagoDto } from './create-metodopago.dto';

export class UpdateMetodopagoDto extends PartialType(CreateMetodopagoDto) {}
