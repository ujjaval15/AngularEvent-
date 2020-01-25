import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})

export class EventsAppComponent {
  title = 'App';
}

