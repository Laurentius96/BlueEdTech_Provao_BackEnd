// 17°)
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsUrl,
} from 'class-validator';
//102°) Importando...
import { ApiProperty } from '@nestjs/swagger';

//  6°) Após criar a pasta dto, vamos exportar o CreateUserDto...
// Uma representação do json que estou esperando receber...
export class CreateUserDto {
  // Usar o mesmo nome usado no model - (schema.prisma)...
  // 18°) Add as validações (@...)
  // 103°) Add o @ApiProperty() em todos...

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'A senha deve ter 6 ou mais dígitos' })
  @ApiProperty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  passwordConfirmation: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty()
  imageUrl: string;
}

//OBS: Após o 103° vamos para o update-user.dto.ts