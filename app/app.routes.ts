
import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { HomeComponent }               from './home.component';
import { LoginComponent }              from './login.component';
import { CompanieDetailComponent }     from './companie-detail.component';
import { CompaniesComponent }       from './companies.component';
import { AddCompaniesComponent }       from './companies.component';
import { EditCompaniesComponent }       from './companies.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'companies', children: [
            {
                path: 'add-companies',
                component: AddCompaniesComponent
            },
            {
                path: 'edit-companies',
                component: EditCompaniesComponent
            },
            {
                path: '',    
                component: CompaniesComponent,
            }
        ]    
         },
  { path: 'detail/:id', component: CompanieDetailComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);