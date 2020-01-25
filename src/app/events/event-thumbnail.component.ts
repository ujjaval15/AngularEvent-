import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2> {{ event?.name}} </h2>
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase=" '8:00 am' "> (Early Start) </span>
            <span *ngSwitchCase=" '10:00 am' "> (Late Start) </span>
            <span *ngSwitchDefault> (Normal Start) </span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div [hidden]="!event?.location">
            <span> Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online URL: {{ event?.onlineUrl }}
        </div>
    </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: boldimport { IEvent } from './shared/event.model';
; }
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left : 10px; }
    `]
})

export class EventThumbnailComponent {
    @Input() event: IEvent; // taking any event input from list component

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        // return {green: isEarlyStart, bold: isEarlyStart};  //Object
        // return (isEarlyStart ? 'green bold' : ''); // String
        return (isEarlyStart ? ['green', 'bold'] : []); // array
    }
    // @Output() eventClick = new EventEmitter();

    // handleClickMe() {
    //     console.log('Clickes');
    //     this.eventClick.emit(this.event.name);
    // }

    // public method access using ref variable
    // logFoo() {
    //     console.log('foo');
    // }
}
