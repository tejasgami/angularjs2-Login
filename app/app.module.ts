import { NgModule }            from '@angular/core';
import { BrowserModule  }      from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { HttpModule, Request, XHRBackend, BrowserXhr, ResponseOptions, XSRFStrategy, Response }          from '@angular/http';
import { AUTH_PROVIDERS, AuthConfig }      from 'angular2-jwt';
import { CommonModule } from '@angular/common';
import { AppComponent }        from './app.component';
import { HomeComponent }       from './home.component';
import { CompaniesComponent }       from './companies.component';
import { AddCompaniesComponent }       from './companies.component';
import { EditCompaniesComponent }       from './companies.component';
import { LoginComponent }      from './login.component';
import { DemoService }         from './demo.service';
import { Auth }                from './auth.service';

import { CompanieDetailComponent }     from './companie-detail.component';
import { Observable } from 'rxjs/Rx';

import { routing,
         appRoutingProviders } from './app.routes';
import { AuthenticationConnectionBackend } from './http';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        CompaniesComponent,
        AddCompaniesComponent,
        EditCompaniesComponent,
        CompanieDetailComponent
    ],
    providers:    [
        appRoutingProviders,
        AUTH_PROVIDERS,
        DemoService,
        Auth,
        { provide: XHRBackend, useClass: AuthenticationConnectionBackend }

    ],
    imports:      [
        BrowserModule,
        CommonModule,
        routing,
        FormsModule,
        HttpModule
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}