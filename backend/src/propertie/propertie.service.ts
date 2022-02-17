import { Injectable } from '@nestjs/common';
// 91°) Importando o dto e o PrismaService...
import { Propertie } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreatePropertieDto } from './dto/create-propertie.dto';
@Injectable()
export class PropertieService {
  // 92°) Criamos o consctructor...
  constructor(private prismaService: PrismaService) {}

  // 93°) Create
  async create(
    createPropertieDto: CreatePropertieDto,
    userId: string,
  ): Promise<Propertie> {
    const createdPropertie = await this.prismaService.propertie.create({
      data: {
        title: createPropertieDto.title,
        price: createPropertieDto.price,
        description: createPropertieDto.description,
        imageUrl: createPropertieDto.imageUrl,
        User: {
          connect: {
            id: userId,
          },
        },
        options:{
          connect: createPropertieDto.options.map((item) => ({ id: item })),
        },
      },
      include: {
        User: true,
        options: true,
    });
    return createdPropertie;
  }
  // 96°) Find Many
  async findMany(): Promise<Propertie[]> {
    const properties = await this.prismaService.propertie.findMany();
    return properties;
  }
}

//OBS: após o 93° ir no controleer de propertie;
//OBS: após o 96° ir no controleer de propertie;
