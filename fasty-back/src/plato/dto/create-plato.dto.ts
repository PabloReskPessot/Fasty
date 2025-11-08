import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreatePlatoDto {
  @IsString()
  nombre: string;

  @IsNumber()
  precio: number;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  imagen?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
