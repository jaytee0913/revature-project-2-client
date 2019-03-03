import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Student} from '../models/student/student';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpClient: HttpClient) { }

  //makes a post request to add a user
  addUser(student: Student): Observable<Student> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<Student>('http://localhost:8080/user/adduser', student, httpOptions);
  }

  //gets the user from the DB by their id
  getUserByUserId(userId: number): Observable<Student> {
    return this.httpClient.get<Student>('http://localhost:8080/user/users/' + userId)
  }
}
