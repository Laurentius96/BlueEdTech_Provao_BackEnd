// 42°) Importando...
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
// 117°) Importando...
import { ApiProperty } from '@nestjs/swagger';

// 43°) Exportando...
export class LoginInputDto {
  // 118°) Add o @ApiProperty()...
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;
}

// OBS: após atapa 118°) seguimos para o arquivo auth.controller.ts
