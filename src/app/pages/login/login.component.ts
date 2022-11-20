import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { loginRequest } from '../../models/Auth';
import { LoginService } from '../../services/login.service';
import { DataService } from '../../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  cookieValue = 'unknown';
  request: loginRequest = new loginRequest();
  loginService: LoginService;
  public loginForm!: FormGroup;
  submitted = false;

  constructor(
    private lg: LoginService,
    private cookieService: CookieService,
    private router: Router,
    private dataService: DataService
  ) {
    this.loginService = lg;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  /*Authenticate user. This will check if the entered elements are valid. If the elements are valid then login api is called*/
  authenticate() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.request.username = this.loginForm.get('username')!.value;
    this.request.password = this.loginForm.get('password')!.value;
    this.loginService.login(this.request).subscribe(
      (result: any) => {
        this.cookieService.set('UserDetails', JSON.stringify(result));
        this.cookieValue = this.cookieService.get('UserDetails');
        alert(result.message);
        this.dataService.setIsDisplayName(
          `Welcome, ${JSON.parse(this.cookieValue).user.firstname}      ${
            JSON.parse(this.cookieValue).user.lastname
          }`
        );
        this.dataService.setIsSignup(false);
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  /*Navigate to forgot password page*/
  forgotPassword() {
    this.router.navigate(['/forgotpassword']);
  }
}
