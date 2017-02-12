import { Injectable }     from '@angular/core';
import { Auth }      from './auth.service';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

import { Observable }        from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/forkJoin';
import { AuthenticationConnectionBackend } from './http';

@Injectable()
export class DemoService {

    constructor(private http: Http, private _authService: Auth) {}
    
    getCompanies() {
        return this.http.get(this._authService.baseUrl+'companies').map((res:Response) => res.json());
    }

    createCompanies(companie) {
        return this.http.post(this._authService.baseUrl+'companies', companie).map((res:Response) => res.json());
    }

    updateCompanies(companie) {    
        return this.http.put(this._authService.baseUrl+'companies/' + companie.id, companie).map((res:Response) => res.json());
    }

    deleteCompanies(companie) {
        return this.http.delete(this._authService.baseUrl+'companies/' + companie.id);
    }

}