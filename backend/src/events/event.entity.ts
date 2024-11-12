// src/events/dto/create-event.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  date: string; // Ideally use a date format validation

  @IsNotEmpty()
  startTime: string;

  @IsNotEmpty()
  endTime: string;
}
