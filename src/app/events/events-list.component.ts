import { Component, Inject, OnInit, inject } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index';

@Component({
    template: `
    <div>
        <h1> Upcoming Angular Events </h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]= "event" ></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events: IEvent [];
    eventService: EventService;
    route: ActivatedRoute
    constructor(@Inject(EventService) eventService: EventService, @Inject(ActivatedRoute) route: ActivatedRoute) {
        this.eventService = eventService;
        this.route = route;
        // console.log(this.events);
    }

    ngOnInit() {
        // this.eventService.getEvents().subscribe(events => {
        //     this.events = events;
        // });
        this.events = this.route.snapshot.data['events'];
    }

    // handleThumbnailClick(eventName) {
    //     this.toastr.success(eventName);
    // }

    // communicate from child to parent
    // handleEventClicked(data) {
    //     console.log('received:', data); // Received foo from child component, communicate from child to parent comp
    // }
}

// 3 ways to handle inter component communicat using input, output and template variable
// Angular built in view encapsulation, so css will apply to particular component
// () --  use to bind in the html to component direction , typically use for responding to events -- one way binindg
// [] -- use to bind in component to html direction, is typically used for displaying data from the component on the page
// [()] - bannana in a box - 2 way data binding, often forms used for editing existing data so display exsiting data as you type

// Directive -- We can attach new functionality to an existing DOM node.