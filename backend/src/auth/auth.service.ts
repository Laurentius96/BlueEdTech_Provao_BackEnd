import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
// 40°)
import { PrismaService } from 'src/prisma.service';
// 44°)
import { LoginInputDto } from './dto/login-input.dto';
// 46°)
import * as bcrypt from 'bcrypt';
// 47°)
import { JwtService } from '@nestjs/jwt';
// 55°) 
import { LoginResponseDto } from './dto/login-response.dto'

@Injectable()
export class AuthService {
  // 41°)
  constructor(
    private prismaService: PrismaService,
    // 48°)
    private jwtService: JwtService,
  ) {}
  // 45°) Complementado...
  async login(loginInputDto: LoginInputDto): Promise<LoginResponseDto> {
    const { email, password } = loginInputDto;

    const userExists = await this.prismaService.user.findUnique({
      where: { email: loginInputDto.email },
    });

    if (!userExists) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const isHashValid = await bcrypt.compare(password, userExists.password);

    if (!isHashValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    delete userExists.password;

    // 49°)
    return {
      token: this.jwtService.sign({ email }),
      user: userExists,
    };
  }
}
