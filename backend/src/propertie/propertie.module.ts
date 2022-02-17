import { Module } from '@nestjs/common';
import { PropertieService } from './propertie.service';
import { PropertieController } from './propertie.controller';
// 86°) Importando o PassportModule...
import { PassportModule } from '@nestjs/passport';
// 87°) Importando o Prisma Service...
import { PrismaService } from 'src/prisma.service';
@Module({
  // 85°) Após ir no "user.modele.ts" copiamos o imports e colamos abaixo...
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [PropertieController],
  // 88°) Add o PrismaService...
  providers: [PropertieService, PrismaService],
})
export class PropertieModule {}

//Obs.: após o item 88° criamos uma pasta dto em propertie e criamos o documeto...
