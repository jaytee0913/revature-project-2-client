import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentJobService {
  id: Number;

  constructor() {}

  getId(){
    return this.id;
  }

  setId(id: Number){
    this.id = id;
  }
}