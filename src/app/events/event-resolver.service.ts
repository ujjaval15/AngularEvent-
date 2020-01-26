import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService  } from './shared/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {
    eventService: EventService
    constructor( @Inject(EventService) eventService: EventService) { 
        this.eventService = eventService;
    }
    //Resolve function automatically subscribe to an observable call that it gets
    //without subscribe, http request will not make to server until someone subscribe to an oberservabel http request
    resolve(route: ActivatedRouteSnapshot) {
        // return this.eventService.getEvents().pipe(map( events => events))
        return this.eventService.getEvent(route.params['id']);
    }
    
}
