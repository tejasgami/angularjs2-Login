import { Auth }      from './auth.service';
import { Injectable }            from '@angular/core';
import { Http, Request, XHRBackend, BrowserXhr, ResponseOptions, XSRFStrategy, Response } from '@angular/http';
import { Router }          from '@angular/router';
import { AuthHttp as JwtAuthHttp, AuthConfig } from 'angular2-jwt';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import 'rxjs/Rx';



@Injectable()
export class AuthenticationConnectionBackend extends XHRBackend {
  
  constructor(browserXhr: BrowserXhr, baseResponseOptions: ResponseOptions, xsrfStrategy: XSRFStrategy, public auth: Auth) {
    super(browserXhr, baseResponseOptions, xsrfStrategy);
  }

  createConnection(request: Request) {

    if(localStorage.getItem('token')){
      request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
      request.headers.set('Content-Type', 'application/json');
    } else {
      request.headers.set('Content-Type', 'application/json');
    }
    
    let xhrConnection = super.createConnection(request);
    xhrConnection.response = xhrConnection.response.catch((error: Response) => {

      if (error.status === 401 || error.status === 403 || error.status === 400) {
       // call login/logout service to handle unauthorized requests
        this.auth.logout();
      }
      return Observable.throw(error);
    });
    return xhrConnection;
  }
}