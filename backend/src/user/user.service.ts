import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// 7°) Importando o CreateUserDto e o PrismaService...
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

// 21°) Importando o USER...
import { User } from '@prisma/client';

// 25°) Importando o UserDto...
import { UserDto } from './dto/user.dto';

// 31°) Importando o Update-User...
import { UpdateUserDto } from './dto/update-user.dto';

// 10°) Use: 'npm i bcrypt' e o 'npm i -D @types/bcrypt' para pacotes de criptografia e fazer a importação...
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  // 8°) Criando um construtor com o PrismaService...
  constructor(private prismaService: PrismaService) {}

  // 9°) Método create...(verifique se model se têm um unique)
  async create(createUserDto: CreateUserDto): Promise<User> {
    // se ele achar um usuário, vai retornar o usuário...
    // se ele não achar nada, a variável vai ser undefind...
    const userEmailExists = await this.prismaService.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (userEmailExists) {
      throw new ConflictException('Email já cadastrado');
    }

    if (createUserDto.password !== createUserDto.passwordConfirmation) {
      throw new ConflictException('Senhas digitadas não conferem');
    }

    delete createUserDto.passwordConfirmation;

    // 11°) Criptografia da senha criada pelo usuário...
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    // 12°) Criando um user com a senha criptografada e colocando no banco de dados...
    const createdUser = await this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });

    delete createdUser.password;

    return createdUser;
  }

  // 19°) Método findMany...
  async findMany(): Promise<UserDto[]> {
    const users = await this.prismaService.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        imageUrl: true,
        createAt: true,
        updateAt: true,
      },
    });
    return users;
  }

  // 27°) Método findUnique...
  async findUnique(userId: string): Promise<User> {
    const userFinded = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userFinded) {
      throw new NotFoundException('Usuário não encontrado');
    }
    delete userFinded.password;
    return userFinded;
  }

  // 29°) Método update...
  // 31°) atualizando com ", updateUserDto: UpdateUserDto"...
  async update(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const userFinded = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userFinded) {
      throw new NotFoundException('Usuário não encontrado');
    }

    // foi criado o arquivo create-user.dtp.ts
    // 32°) Verificando se o email criado já existe no banco de dados...
    if (updateUserDto.email) {
      const emailExists = await this.prismaService.user.findUnique({
        where: {
          email: updateUserDto.email,
        },
      });

      if (emailExists) {
        throw new ConflictException('Email já cadastrado');
      }
    }

    const updatedUser = await this.prismaService.user.update({
      where: { id: userId },
      data: {
        email: updateUserDto.email,
        firstName: updateUserDto.firstName,
        lastName: updateUserDto.lastName,
        imageUrl: updateUserDto.imageUrl,
      },
    });

    delete updatedUser.password;

    return updatedUser;
  }

  // 35°) Método delete...
  async delete(userId: string) {
    const userFinded = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userFinded) {
      throw new NotFoundException('Usuário não encontrado');
    }
    const deletedUser = await this.prismaService.user.delete({
      where: {
        id: userId,
      },
    });

    delete deletedUser.password;

    return deletedUser;
  }
}
