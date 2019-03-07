import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Event } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  allEvents: Array<Event>;

  constructor(private router: Router,
              private eventService: EventService,
              private cookie: CookieService) {}

  ngOnInit() {
    if(this.cookie.get("student_id") == ''){
      this.router.navigateByUrl('/front-page');
    }
    this.displayEvents();
  }

  displayEvents() {
    this.eventService.getEvents().subscribe ((payload) => {
      this.allEvents = payload;
      console.log(this.allEvents);
      for(var i = 0; i < this.allEvents.length ; i++) {
        this.allEvents[i].isCollapsed = true;   
      }
    });
  }
  
  setEvent(i){
    this.eventService.setId(this.allEvents[i].id);
    this.eventService.setName(this.allEvents[i].name);
  }

}
