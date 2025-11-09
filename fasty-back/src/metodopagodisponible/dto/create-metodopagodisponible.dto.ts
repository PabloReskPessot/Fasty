import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMetodopagodisponibleDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  tipo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  banco: string;
}
