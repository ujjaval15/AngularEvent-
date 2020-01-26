import { Component, Inject} from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'login.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px;}
    `]
})

export class LoginComponent {
    authService: AuthService
    router: Router
    mouseoverLogin
    loginInvalid = false;

    constructor(@Inject(AuthService) authService: AuthService, @Inject(Router) router: Router) {
        this.authService = authService;
        this.router = router;
    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
            .subscribe( resp => {
                if(!resp) {
                    this.loginInvalid = true;
                } else {
                    this.router.navigate(['events']);
                }
            })
        console.log(formValues);
        // this.router.navigate(['events']);
    }   

    cancel() {
        this.router.navigate(['events']);
    }
}