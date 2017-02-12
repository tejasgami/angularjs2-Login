import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';

import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }        from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/forkJoin';


@Injectable()
export class Auth {

  public token: string;
  public user: string;
  public baseUrl: string;

  constructor(private http: Http, private router: Router) {
    var usertoken = localStorage.getItem('token');
    this.token = usertoken;
    this.user = localStorage.getItem('user');

    this.baseUrl = "http://localhost:8000/api/";
  }
  
  public login(data){
    return this.http.post(this.baseUrl+'login', data).map((res:Response) => res.json());
  }

  public currentUser(){
    return localStorage.getItem('user');
  }

  public authenticated(){
    return localStorage.getItem('token');
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.token = null;
    this.user = null;
    this.router.navigate(['/login']);
  }

}