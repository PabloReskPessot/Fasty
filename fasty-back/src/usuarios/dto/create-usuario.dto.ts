import { IsString, IsEmail, IsBoolean, IsDateString, IsOptional, Length } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUsuarioDto {
    @IsOptional()
    id?: number;

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
    password: string;

    @IsDateString()
    fechaNacimiento: string; // use ISO date string in requests

    @IsString()
    genero: string;

    @IsBoolean()
    activo: boolean;
}
