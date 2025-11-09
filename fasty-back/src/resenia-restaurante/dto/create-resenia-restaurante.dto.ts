import { IsInt, IsOptional, IsString, Min, Max } from 'class-validator';

export class CreateReseniaRestauranteDto {
  @IsInt()
  usuarioID: number; // ID del usuario que deja la reseña

  @IsInt()
  restauranteID: number; // ID del restaurante reseñado

  @IsInt()
  @Min(1)
  @Max(5)
  puntuacion: number;

  @IsOptional()
  @IsString()
  descripcion?: string;
}
