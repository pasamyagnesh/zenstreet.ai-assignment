import { Injectable } from '@nestjs/common';
import { Event } from './event.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class EventsService {
  private events: Event[] = [];

  getAll() {
    return this.events;
  }

  create(event: Event) {
    event.id = uuid();
    this.events.push(event);
    return event;
  }

  update(id: string, event: Event) {
    const eventIndex = this.events.findIndex(e => e.id === id);
    if (eventIndex !== -1) {
      this.events[eventIndex] = { ...this.events[eventIndex], ...event };
      return this.events[eventIndex];
    }
    return null;
  }

  delete(id: string) {
    this.events = this.events.filter(e => e.id !== id);
    return { deleted: true };
  }
}
