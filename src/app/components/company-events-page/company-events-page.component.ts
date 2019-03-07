import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Event } from 'src/app/models/event.model';
import { EventService } from './../../services/event.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-events-page',
  templateUrl: './company-events-page.component.html',
  styleUrls: ['./company-events-page.component.css']
})
export class CompanyEventsPageComponent implements OnInit {
  page: Number = 1;
  pageSize: Number = 10;
  collectionSize: Number = 5;
  eventId: Number;
  allEvents: Array<Event>;

  constructor(private router: Router,
              private eventService: EventService,
              private companyService: CompanyService,
              private cookie: CookieService) {}

  ngOnInit() {
    if(this.cookie.get("company_id") == ''){
      this.router.navigateByUrl('/front-page');
    }
    this.displayEvents();
  }

  reloadPage() {
    this.router.navigateByUrl('/company-events-page');
  }
  
  displayEvents() {
    this.eventService.getEvents().subscribe ((payload) => {
      this.allEvents = payload;
      console.log(this.allEvents);
      this.collectionSize = this.allEvents.length;
      for(var i = 0; i < this.allEvents.length ; i++) {
        this.allEvents[i].isCollapsed = true;   
      }
    });
  }

  rsvpToEvent(i){
    const rsvpID = {
      businessId: this.companyService.getId(),
      eventId: this.eventService.getId()
    };

    // console.log("RSVP'd for " + this.allEvents[i].name + " " + this.eventService.getId());
    this.eventService.addToRSVP(rsvpID).subscribe((payload) => {
      this.displayEvents();
      window.alert("RSVP Confirmed!");
    });
  }

  setEvent(i){
    this.eventService.setId(this.allEvents[i].id);
    this.eventService.setName(this.allEvents[i].name);
  }

}
