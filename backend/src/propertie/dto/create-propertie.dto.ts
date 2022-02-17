// 90°) Fazemos as importações...
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUrl,
  IsArray,
} from 'class-validator';
// 124°) Importando...
import { ApiProperty } from '@nestjs/swagger';
import { UrlWithStringQuery } from 'url';

// 89°) Criamos a exportação do dto... de
export class CreatePropertieDto {
  // 125°) Add o  @ApiProperty() para todos...
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  price: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty()
  imageUrl: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  options: number[];
}

// Obs. Após o número 125° vamos configurar o arquivo: propertie.conroller.ts
