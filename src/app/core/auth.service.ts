import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../Features/auth/login/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://localhost:7215/api';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(
      `${this.baseUrl}/Auth/login`,
      {
        username,
        password
      }
    );

  }

}