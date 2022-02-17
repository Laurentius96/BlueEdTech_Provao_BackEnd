import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
// 133°)
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/prisma.service';

@Module({
  // 132°)
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [ReservationController],
  providers: [ReservationService, PrismaService ]
})
export class ReservationModule {}

// OBS: depois do 133° seguiomos para a criação do dto;