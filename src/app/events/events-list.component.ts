import { Component, Inject, OnInit, inject } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router'

@Component({
    template: `
    <div>
        <h1> Upcoming Angular Events </h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]= "event" ></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events: any [];
    eventService: EventService;
    toastr: ToastrService;
    route: ActivatedRoute
    constructor(@Inject(EventService) eventService: EventService, @Inject(ToastrService) toastr: ToastrService, @Inject(ActivatedRoute) route: ActivatedRoute) {
        this.eventService = eventService;
        this.toastr = toastr;
        this.route = route;
        // console.log(this.events);
    }

    ngOnInit() {
        // this.eventService.getEvents().subscribe(events => {
        //     this.events = events;
        // });
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }

    // communicate from child to parent
    // handleEventClicked(data) {
    //     console.log('received:', data); // Received foo from child component, communicate from child to parent comp
    // }
}

// 3 ways to handle inter component communicat using input, output and template variable
// Angular built in view encapsulation, so css will apply to particular component
