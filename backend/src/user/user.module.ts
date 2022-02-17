import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// 4°) Importando o módulo do Prisma Service...
import { PrismaService } from 'src/prisma.service';
// 69°) importando o passaport módulo do Prisma Service...
import { PassportModule } from '@nestjs/passport';
@Module({
  // 68°) Criando o import e add o Passaport.Module...
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [UserController],
  // 5°) Add o PrismaService nas providers...
  providers: [UserService, PrismaService],
})
export class UserModule {}
