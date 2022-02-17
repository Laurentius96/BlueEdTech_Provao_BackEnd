//134°)
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString } from 'class-validator';

export class CreateReservationDto {
  @IsDateString()
  @ApiProperty()
  start: Date;

  @IsDateString()
  @ApiProperty()
  end: Date;

  @IsString()
  @ApiProperty()
  propertie: string;
}

// OBS: Após o item 134° seguimos para reservation.service.ts