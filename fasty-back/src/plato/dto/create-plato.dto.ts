// src/plato/dto/create-plato.dto.ts
import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CreatePlatoDto {
  @IsString()
  nombre: string;

  @IsNumber()
  precio: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  porcentajeDescuento?: number;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  imagen?: string;

  @IsOptional()
  activo?: boolean;

  @IsOptional()
  categoriaId?: number;

  @IsOptional()
  restauranteId?: number;
}
