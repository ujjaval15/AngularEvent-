import { Component, Inject, inject } from "@angular/core";
import { Router } from '@angular/router'
import { EventService } from './shared/index';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
        em {float:right; color: #E05C65; padding-left: 10px;}
        .error input {background-color: #E3C3C5;}
        .error :: -webkit-input-placeholder {color: #999;}
        .error :: -moz-placeholder { color: #999; }
        .error :: -ma@Input() public propertyName: propertyType;-placeholder { color: #999; }
    `]
})

export class CreateEventComponent {
    newEvent
    isDirty: boolean = true;
    router: Router;
    eventService: EventService
    constructor(@Inject(Router) router: Router, @Inject(EventService) eventService: EventService) {
        this.router = router;   
        this.eventService = eventService;
    }

    saveEvent(formValues) {
        console.log(formValues);
        // this.eventService.saveEvent(formValues);
        // this.isDirty = false;
        // this.router.navigate(['/events']);
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        })
    }

    cancel(){
        this.router.navigate(['/events']);
    }

}