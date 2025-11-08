import { IsString } from 'class-validator';

export class CreateCategoriaDto {
  @IsString()
  tipoComida: string;
}
