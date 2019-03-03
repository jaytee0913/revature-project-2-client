import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  //checks if the user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') != null;
  }

  // check to see if the user is in the dB

  public getToken(): number {
    return Number(localStorage.getItem('authToken'));
  }

  authenticate(email: string, password: string, success, fail) {
    return this.http.post<any>('http://localhost:8080/authuser',
        JSON.stringify({username: email, password: password}),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .toPromise()
        .then((resp) => {
              localStorage.setItem('authToken', JSON.stringify(resp));
              success();
            },
            (err) => {
              fail(err);
              window.alert("Invalid Credentials!")
            });
  }

  companyLogin(credentials: any) {
    const url = 'http://localhost:8080/login/business';
    return this.http.post(url, credentials);
  }

  studentLogin(credentials: any) {
    const url = 'http://localhost:8080/login/student';
    return this.http.post(url, credentials);
  }

  //clears the auth token
  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
