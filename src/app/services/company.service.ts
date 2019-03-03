import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Company} from '../models/company/company';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private httpClient: HttpClient) { }

  //makes a post request to add a user
  addUser(company: Company): Observable<Company> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<Company>('http://localhost:8080/user/adduser', company, httpOptions);
  }

  //gets the user from the DB by their id
  getUserByUserId(userId: number): Observable<Company> {
    return this.httpClient.get<Company>('http://localhost:8080/user/users/' + userId)
  }
}
