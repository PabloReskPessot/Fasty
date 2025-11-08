import { IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';

export class CreateRestauranteDto {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsString()
  horarioApertura: string;

  @IsString()
  horarioCierre: string;

  @IsOptional()
  @IsString()
  logo?: string;

  @IsOptional()
  @IsNumber()
  puntuacion?: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  // Podés agregar campos para las relaciones si querés conectar directamente
 // @IsOptional()
 // categoriaId?: number;

 // @IsOptional()
 // direccionRestauranteId?: number;

 // @IsOptional()
 // administradorId?: number;
}
