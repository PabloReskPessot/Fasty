import { IsString, IsNumber, IsOptional, IsBoolean, IsDateString } from 'class-validator';

export class CreateDescuentoDto {
  @IsString()
  descripcion: string;

  @IsString()
  tipo: string;

  @IsNumber()
  valor: number;

  @IsDateString()
  fechaInicio: Date;

  @IsDateString()
  fechaFin: Date;

  @IsOptional()
  @IsString()
  codigo?: string;

  @IsOptional()
  @IsString()
  row?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
