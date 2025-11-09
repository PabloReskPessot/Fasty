import {
  IsString,
  IsEmail,
  IsBoolean,
  IsDateString,
  IsOptional,
  Length,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @Length(1, 100)
  nombre: string;

  @IsString()
  @Length(1, 100)
  apellido: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 128)
  contrasena: string;

  @IsOptional()
  @IsDateString()
  fechaNacimiento?: string;

  @IsOptional()
  @IsString()
  genero?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
