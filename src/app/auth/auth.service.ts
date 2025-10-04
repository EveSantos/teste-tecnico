import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:3000';
  router = inject(Router)

  login(data: any) {
    return this.httpClient.post(`${this.baseUrl}/login`, data)
      .pipe(tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }

  signup(data: any) {
    return this.httpClient.post(`${this.baseUrl}/register`, data);
  }

  logout() {
    localStorage.removeItem('authUser');
    this.router.navigate(['/']);

  }

  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }
}
