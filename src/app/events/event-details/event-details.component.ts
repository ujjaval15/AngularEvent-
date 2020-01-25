import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px }
        .event-image { height: 100px }
    `]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    eventService: EventService;
    route: ActivatedRoute;
    constructor(@Inject(EventService) eventService: EventService, @Inject(ActivatedRoute) route: ActivatedRoute) {
        this.eventService = eventService;
        this.route = route;
    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
}
