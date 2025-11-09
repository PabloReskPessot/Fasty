import { IsBoolean, IsInt, IsNotEmpty } from 'class-validator';

export class CreateMetodopagoDto {
  @IsInt()
  @IsNotEmpty()
  usuarioID: number;

  @IsInt()
  @IsNotEmpty()
  metodoPagoDisponibleID: number;

  @IsBoolean()
  predeterminado: boolean;
}
