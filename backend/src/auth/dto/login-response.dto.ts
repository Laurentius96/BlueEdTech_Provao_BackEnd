// 53°)
import { User } from '@prisma/client';
import { IsString, IsNotEmpty } from 'class-validator';

// 54°)
export class LoginResponseDto {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  user: User;
}
