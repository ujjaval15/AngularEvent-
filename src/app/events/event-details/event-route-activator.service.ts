import { Router ,ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    eventService: EventService;
    router: Router;
    constructor(@Inject(EventService) eventService: EventService, @Inject(Router) router: Router) {
        this.router = router;
        this.eventService = eventService;
    }
    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id']);
        if(!eventExists) {
            this.router.navigate(['404']);
        }
        return eventExists;
    }
} 