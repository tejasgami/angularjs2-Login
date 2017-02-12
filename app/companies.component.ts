import { Component, OnInit }   from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { DemoService }      from './demo.service';
import { Auth } from './auth.service';


@Component({
  selector: 'companies',
  templateUrl: 'app/companies.template.html'
})

export class CompaniesComponent implements OnInit {

  public companies;

  constructor(private _demoService: DemoService, private auth: Auth) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this._demoService.getCompanies().subscribe(
      // the first argument is a function which runs on success
      data => { this.companies = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading companies')
    );
  }
  
  createCompanies(name) {
    let companie = {name: name};
    this._demoService.createCompanies(companie).subscribe(
       data => {
         // refresh the list
         this.getCompanies();
         return true;
       }
    );
  }

  updateCompanies(companie) {
    this._demoService.updateCompanies(companie).subscribe(
       data => {
         // refresh the list
         this.getCompanies();
         return true;
       }
    );
  }

  deleteCompanies (companie) {
    if (confirm("Are you sure you want to delete " + companie.name + "?")) {
      this._demoService.deleteCompanies(companie).subscribe(
         data => {
           // refresh the list
           this.getCompanies();
           return true;
         }
      );
    }
  }

}

@Component({
  selector: 'edit-companies',
  templateUrl: 'app/edit-companies.template.html'
})

export class EditCompaniesComponent implements OnInit {

  public companies;

  constructor(private _demoService: DemoService, private auth: Auth) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this._demoService.getCompanies().subscribe(
      // the first argument is a function which runs on success
      data => { this.companies = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading companies')
    );
  }
  
  createCompanies(name) {
    let companie = {name: name};
    this._demoService.createCompanies(companie).subscribe(
       data => {
         // refresh the list
         this.getCompanies();
         return true;
       }
    );
  }

  updateCompanies(companie) {
    this._demoService.updateCompanies(companie).subscribe(
       data => {
         // refresh the list
         this.getCompanies();
         return true;
       }
    );
  }

  deleteCompanies (companie) {
    if (confirm("Are you sure you want to delete " + companie.name + "?")) {
      this._demoService.deleteCompanies(companie).subscribe(
         data => {
           // refresh the list
           this.getCompanies();
           return true;
         }
      );
    }
  }

}


@Component({
  selector: 'add-companies',
  templateUrl: 'app/add-companies.template.html'
})

export class AddCompaniesComponent implements OnInit {

  public companies;

  constructor(private _demoService: DemoService, private auth: Auth) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this._demoService.getCompanies().subscribe(
      // the first argument is a function which runs on success
      data => { this.companies = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading companies')
    );
  }
  
  createCompanies(name) {
    let companie = {name: name};
    this._demoService.createCompanies(companie).subscribe(
       data => {
         // refresh the list
         this.getCompanies();
         return true;
       }
    );
  }

  updateCompanies(companie) {
    this._demoService.updateCompanies(companie).subscribe(
       data => {
         // refresh the list
         this.getCompanies();
         return true;
       }
    );
  }

  deleteCompanies (companie) {
    if (confirm("Are you sure you want to delete " + companie.name + "?")) {
      this._demoService.deleteCompanies(companie).subscribe(
         data => {
           // refresh the list
           this.getCompanies();
           return true;
         }
      );
    }
  }

}