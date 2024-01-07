import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  LoginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(null, Validators.required),

  });

  onSubmit(){

  }

}
