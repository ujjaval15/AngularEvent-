import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  DurationPipe
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent  } from './nav/navbar.component';
import { 
  JQ_TOKEN, 
  TOASTR_TOKEN, 
  Toastr, 
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective   
} from './common/index';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
    DurationPipe
  ],
  bootstrap: [EventsAppComponent],
  providers: [
    EventService, 
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    }, 
    EventRouteActivator,
    EventListResolver,
    VoterService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ]
})
export class AppModule { }

export function checkDirtyState( component: CreateEventComponent ) {
  if(component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}

/* 
4 ways dependency injection
//1 - 
{
  provide: TOASTR_TOKEN,
  useValue: toastr
}  
use value when some one inject TOASTR_TOKEN token 

//2 
EventRouteActivator --> { provide: EventRouteActivator, useClass: EventRouteActivator}
use instance of class when some one inject EventRouteActivator token 

//3
{ provide: minimalLogger, useExisting: Logger}
//user logger service but out of 20 only use minimalLogger

//4 
{ provide: Logger, useFactory: Logger}
factory paramter is a function , paramterize function 
*/
