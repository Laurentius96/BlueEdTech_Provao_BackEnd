// 24°) Criando e exportando a classe criada...
import { IsString, IsNotEmpty, IsEmail, IsUrl, IsDate } from 'class-validator';
export class UserDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;

  @IsString()
  @IsNotEmpty()
  @IsDate()
  createAt: Date;

  @IsString()
  @IsNotEmpty()
  @IsDate()
  updateAt: Date;
}
