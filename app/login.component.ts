import { Component } from '@angular/core';
import { Auth }      from './auth.service';
import { Params } from '@angular/router';
import { Router }          from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: 'app/login.template.html'
})

export class LoginComponent {
  
  constructor(private _authService: Auth, private router: Router) { }

  login(username, pass){

   let creadencials = {"email": username, "password": pass};
  
    this._authService.login(creadencials).subscribe(
         data => {
         console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', data.user);
            this.router.navigate(['/home']);
         }
    );
  }
}