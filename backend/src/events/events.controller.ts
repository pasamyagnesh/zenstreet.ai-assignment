import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './event.entity';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getAllEvents() {
    return this.eventsService.getAll();
  }

  @Post()
  createEvent(@Body() event: Event) {
    return this.eventsService.create(event);
  }

  @Put(':id')
  updateEvent(@Param('id') id: string, @Body() event: Event) {
    return this.eventsService.update(id, event);
  }

  @Delete(':id')
  deleteEvent(@Param('id') id: string) {
    return this.eventsService.delete(id);
  }
}
``