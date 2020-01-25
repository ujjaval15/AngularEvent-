import { Injectable, Inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService  } from './shared/event.service'
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
    eventService: EventService
    constructor( @Inject(EventService) eventService: EventService) { 
        this.eventService = eventService;
    }
    resolve() {
        return this.eventService.getEvents().pipe(map( events => events))
    }
    
}
