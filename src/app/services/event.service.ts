import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './../models/event.model';
import { Company } from './../models/company.model';

@Injectable({
  providedIn: 'root'
})

export class EventService {
  id: Number;
  username: String;
  name: String;
  
  constructor(private httpClient: HttpClient) {}

  getId(){
    return this.id;
  }

  setId(id: Number){
    this.id = id;
  }

  getName(){
    return this.name;
  }

  setName(name: String){
    this.name = name;
  }

  // GET request for all events
  getEvents(): Observable<Array<Event>> {
    const url = `http://localhost:8080/events`;
    return this.httpClient.get<Array<Event>>(url);
  }

  // POST request to rsvp to event
  addToRSVP(rsvpID): Observable<Company> {
    const url = `http://localhost:8080/business/rsvpEvent`;
    return this.httpClient.post<Company>(url, rsvpID);
  } 

  // GET request for all events rsvp'd by a company
  getCompaniesByEvent(id: Number): Observable<Array<Company>> {
   const url = `http://localhost:8080/events/viewBusiness/${id}`;
    return this.httpClient.get<Array<Company>>(url);
  }

  // GET request for all events rsvp'd by a company
  getEventsByCompany(id: Number): Observable<Array<Event>> {
    const url = `http://localhost:8080/events/viewEventsRSVP/${id}`;
     return this.httpClient.get<Array<Event>>(url);
   }

   // DELETE favorite job
   rmRSVP(b_id: Number, e_id: Number): Observable<Company> {
    const url = `http://localhost:8080/business/removeEvent/b_Id=${b_id}&e_Id=${e_id}`;
    return this.httpClient.delete<Company>(url);
  }
  
}
