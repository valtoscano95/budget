import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'home-container',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private authenticationService: AuthenticationService){}

  login(){
    this.authenticationService.activateLogin();
  }

  signup(){
    this.authenticationService.activateSignUp();
  }
}
