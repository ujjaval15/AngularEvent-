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
    //Resolve function automatically subscribe to an observable call that it gets
    //without subscribe, http request will not make to server until someone subscribe to an oberservabel http request
    resolve() {
        // return this.eventService.getEvents().pipe(map( events => events))
        return this.eventService.getEvents();
    }
    
}
