import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginModule = {
    email: '',
    password: '',
  };
  constructor() {}

  ngOnInit(): void {}
  login() {
    console.log(this.loginModule);
    sessionStorage.setItem('loginInfo', JSON.stringify(this.loginModule));
  }
}
