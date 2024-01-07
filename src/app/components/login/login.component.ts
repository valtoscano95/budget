import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthenticationService){}
  isLogin:boolean;
  isLoginSubscription: Subscription;
  title = 'Login';

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.min(8)]),
  });

  onSubmit(){

  }

  ngOnInit(): void {
    this.isLoginSubscription = this.authService.isLogin.subscribe((item)=>{
      this.isLogin = item;
    })
  }

  ngOnDestroy(): void {
    this.isLoginSubscription.unsubscribe();
  }

}
