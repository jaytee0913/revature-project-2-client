import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company.model';
import { Student } from 'src/app/models/student.model';

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

  companySignUp(signupInput: any) {
    const url = `http://localhost:8080/signup/business`;
    return this.http.post(url, signupInput);
  }
  
  companyLogin(credentials: any): Observable<Company> {
    const url = 'http://localhost:8080/login/business';
    return this.http.post<Company>(url, credentials);
  }

  studentSignUp(signupInput: any) {
    const url = `http://localhost:8080/signup/student`;
    return this.http.post(url, signupInput);
  }

  studentLogin(credentials: any): Observable<Student>{
    const url = 'http://localhost:8080/login/student';
    return this.http.post<Student>(url, credentials);
  }

  //clears the auth token
  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
