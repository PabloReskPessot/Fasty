import { PartialType } from '@nestjs/mapped-types';
import { CreateMetodopagodisponibleDto } from './create-metodopagodisponible.dto';

export class UpdateMetodopagodisponibleDto extends PartialType(CreateMetodopagodisponibleDto) {}
