import { IsInt, IsOptional, IsString, Min, Max } from 'class-validator';

export class CreateReseniaRepartidorDto {
  @IsInt()
  usuarioID: number; // ID del usuario que deja la reseña

  @IsInt()
  repartidorID: number; // ID del repartidor al que se reseña

  @IsInt()
  @Min(1)
  @Max(5)
  puntuacion: number;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
