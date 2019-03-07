import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
    id: Number;
    username: String;
    name: String;
  
    constructor() {}
  
    getId(){
      return this.id;
    }
  
    setId(id: Number){
      this.id = id;
    }
  
    getUsername(){
      return this.username;
    }
  
    setUsername(username: String){
      this.username = username;
  }

  getName(){
    return this.name;
  }

  setName(name: String){
    this.name = name;
  }
}