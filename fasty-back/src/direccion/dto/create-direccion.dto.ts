import { IsString, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreateDireccionDto {
  @IsString()
  calle: string;

  @IsString()
  altura: string;

  @IsString()
  ciudad: string;

  @IsString()
  provincia: string;

  @IsOptional()
  @IsString()
  pisoDepartamento?: string;

  @IsOptional()
  @IsString()
  indicaciones?: string;

  @IsOptional()
  @IsNumber()
  latitud?: number;

  @IsOptional()
  @IsNumber()
  longitud?: number;

  @IsOptional()
  @IsBoolean()
  predeterminada?: boolean;

  @IsOptional()
  usuarioId?: number; // para asignar dirección a un usuario existente
}
