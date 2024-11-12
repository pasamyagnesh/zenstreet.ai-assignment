import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
  private events: Array<CreateEventDto> = [];

  addEvent(createEventDto: CreateEventDto): CreateEventDto {
    this.events.push(createEventDto);
    return createEventDto;
  }

  findEventsByMonth(year: number, month: number): Array<CreateEventDto> {
    return this.events.filter(
      (event) =>
        new Date(event.date).getFullYear() === year &&
        new Date(event.date).getMonth() === month - 1,
    );
  }

  getEvents(): Array<CreateEventDto> {
    return this.events;
  }
}