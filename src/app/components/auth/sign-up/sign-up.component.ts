import { Errors } from './../../../interfaces/errors';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public errors: Errors = {
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.getErrors();
  }

  public getErrors() {
    this.authService.errors$.subscribe(data => {
      this.errorPacker(data.errors);
    })
  }

  errorPacker(data: any) {
    //Reseting errors 
    this.errors.email = '';
    this.errors.username = '';
    this.errors.firstName = '';
    this.errors.lastName = '';
    this.errors.password = '';

    //Packing errors
    data.forEach((e: any) => {
      switch(e.PropertyName){
        case "Username" : this.errors.username = e.ErrorMessage;
        break;
        case "Email" : this.errors.email = e.ErrorMessage;
        break;
        case "FirstName" : this.errors.firstName = e.ErrorMessage;
        break;
        case "LastName" : this.errors.lastName = e.ErrorMessage;
        break;
        case "Password" : this.errors.password += " " + e.ErrorMessage;
        break;
      }
    });
  }
}
