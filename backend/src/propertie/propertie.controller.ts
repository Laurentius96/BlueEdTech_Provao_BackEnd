//Importando o que for necessario
import { Controller, UseGuards, Post, Body, Get } from '@nestjs/common';
import { PropertieService } from './propertie.service';
// 94° Importações...
import { CreatePropertieDto } from './dto/create-propertie.dto';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { User, Propertie } from '@prisma/client';
// 126°) Importando...
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

// 127°) Add o @ApiTags('propertie')...
@ApiTags('propertie')
@Controller('propertie')
export class PropertieController {
  constructor(private readonly propertieService: PropertieService) {}

  // 95°) Criando o Post
  @Post()
  // 128°) Add ApiOperation...
  @ApiOperation({
    summary: 'Criar uma propriedade',
  })
  // 129°) Add o @ApiBearerAuth(), por causa do Token - @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  create(
    @Body() createPropertieDto: CreatePropertieDto,
    @LoggedUser() user: User,
  ): Promise<Propertie> {
    return this.propertieService.create(createPropertieDto, user.id);
  }

  // 97°) FindMany
  @Get()
  // 130°) Add ApiOperation...
  @ApiOperation({
    summary: 'Listar todas propriedades disponíveis',
  })
  findMany(): Promise<Propertie[]> {
    return this.propertieService.findMany();
  }
}

// OBS: Após o 95° voltar para o service da propertie;
// OBS: Após o 97° vamos configurar o Sweeger: https://docs.nestjs.com/openapi/introduction - usamos:  npm install --save @nestjs/swagger swagger-ui-express e vamos no main.ts
// OBS: Após o item 130°, seguimos para o arquivo: user.controller.ts para deletar alguns @UseGuards...

