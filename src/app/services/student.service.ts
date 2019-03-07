import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  id: Number;
  email: String;

  constructor() {}

  getId(){
    return this.id;
  }

  setId(id: Number){
    this.id = id;
  }

  getEmail(){
    return this.email;
  }

  setEmail(email: String){
    this.email = email;
  }
}
