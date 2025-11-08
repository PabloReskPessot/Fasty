import { IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class CreateRepartidorDto {
  @IsString()
  nombre: string;

  @IsString()
  vehiculo: string;

  @IsOptional()
  @IsString()
  patente?: string;

  @IsString()
  documento: string;

  @IsOptional()
  @IsBoolean()
  disponible?: boolean;

  @IsOptional()
  @IsNumber()
  calificacion?: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}

