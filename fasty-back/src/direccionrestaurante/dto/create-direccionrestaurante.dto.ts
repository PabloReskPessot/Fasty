import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateDireccionrestauranteDto {
  @IsString()
  calle: string;

  @IsString()
  altura: string;

  @IsString()
  ciudad: string;

  @IsOptional()
  @IsNumber()
  latitud?: number;

  @IsOptional()
  @IsNumber()
  longitud?: number;

  @IsOptional()
  restauranteId?: number; // para asociar esta dirección a un restaurante existente
}
