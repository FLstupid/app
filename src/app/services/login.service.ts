import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { loginRequest } from '../models/auth';

@Injectable()
export class LoginService {
  loginUrl: string;
  loginResourceURL: string;

  /**
   * Constructor.
   */
  constructor(private http: HttpClient) {
    this.loginUrl = 'auth/login';
    this.loginResourceURL = `${environment.apiBaseURL}${this.loginUrl}`;
  }

  /**
   * User login
   *
   * @param  {User} user: User {user with username and password}
   * @return {Observable<User>} {Observable for saved user object}
   */
  login(user: loginRequest): Observable<User> {
    return this.http.post<User>(this.loginResourceURL, user);
  }
}
