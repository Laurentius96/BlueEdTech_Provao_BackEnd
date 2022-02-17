// 30°)
import {
  IsString,
  IsEmail,
  IsUrl,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
// 104°) Importando...
import { ApiProperty } from '@nestjs/swagger';
export class UpdateUserDto {
  // 105°) Add o @ApiProperty() em todos..
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsUrl()
  @ApiProperty()
  imageUrl: string;
}

// Após o item 105° vamos par ao arquivo user.controller.ts
