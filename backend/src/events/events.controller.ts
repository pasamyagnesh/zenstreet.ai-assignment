import { Body, Controller, Get, Post, Query, HttpStatus, Res } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { Response } from 'express';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async addEvent(@Body() createEventDto: CreateEventDto, @Res() res: Response) {
    const event = this.eventsService.addEvent(createEventDto);
    return res.status(HttpStatus.CREATED).json({
      message: 'Event added successfully',
      event,
    });
  }

  @Get('month')
  async getMonthEvents(@Query('month') month: number, @Query('year') year: number, @Res() res: Response) {
    const events = await this.eventsService.findEventsByMonth(year, month);
    return res.status(HttpStatus.OK).json(events);
  }

  @Get()
  async getEvents(@Res() res: Response) {
    const events = this.eventsService.getEvents();
    return res.status(HttpStatus.OK).json(events);
  }
}