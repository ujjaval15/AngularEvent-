import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-events',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})

export class EventsAppComponent implements OnInit {
  title = 'App';
  constructor(@Inject(AuthService) private auth: AuthService) {
    
  }

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}

