import { PartialType } from '@nestjs/mapped-types';
import { CreateAdministradorBackofficeDto } from './create-administrador-backoffice.dto';

export class UpdateAdministradorBackofficeDto extends PartialType(CreateAdministradorBackofficeDto) {}
