// Arquivo Raiz

import { NestFactory } from '@nestjs/core';
// 16°) Importando o ValidationPipe...
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
// 99°) Importando...
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // é pela NestFactory de podemos fazer uma aplicação
  const app = await NestFactory.create(AppModule);

  // 15°) Após usar o comando npm i --save class-validator class-transformer colocamos a linha de coódigo abaixo extraido da documentação: https://docs.nestjs.com/techniques/validation
  app.useGlobalPipes(new ValidationPipe());

  // 98°) Após copiar no material do nest colamos abaixo:
  const config = new DocumentBuilder()
    // 100°) Mudando o título...
    .setTitle('WebTech')
    .setDescription('WebTech da Blue com NestJS, Prisma...')
    .setVersion('1.0')
    .addTag('WebTech')
    // 101°) Add o .addBearerAuth()...
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

// OBS: Depois do 101° seguimos com a documentação e damos um "npm rum start"
// OBS: Após rodar o npm anterior seguimos para o arquivo create-user.dto.ts
