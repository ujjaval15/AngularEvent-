import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px }
        .event-image { height: 100px }
        a {cursor: pointer}
    `]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean
    eventService: EventService;
    route: ActivatedRoute;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(@Inject(EventService) eventService: EventService, @Inject(ActivatedRoute) route: ActivatedRoute) {
        this.eventService = eventService;
        this.route = route;
    }

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession() {
        this.addMode = true;
    }
    
    cancelAddSession(){
        this.addMode = false;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }
}
