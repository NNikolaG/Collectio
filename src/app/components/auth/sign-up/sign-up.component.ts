import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public errors!: any;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.getErrors();
  }

  public getErrors(){
    this.authService.errors$.subscribe(data =>{
      this.errors = data.errors;
    })
  }
}
