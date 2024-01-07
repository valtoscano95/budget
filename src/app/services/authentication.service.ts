import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLogin = new BehaviorSubject<boolean>(null);

  activateLogin(){
    this.isLogin.next(true);
  }

  activateSignUp(){
    this.isLogin.next(false);
  }
  
  constructor() { }
}
