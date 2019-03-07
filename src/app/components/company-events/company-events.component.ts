import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CompanyService } from 'src/app/services/company.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-company-events',
  templateUrl: './company-events.component.html',
  styleUrls: ['./company-events.component.css']
})
export class CompanyEventsComponent implements OnInit {
  allEvents: any;

  constructor(private router: Router,
              private cookie: CookieService,
              private companyService: CompanyService,
              private eventService: EventService) { }

  ngOnInit() {
    if(this.cookie.get("company_id") == ''){
      this.router.navigateByUrl('/front-page');
    }
    // console.log("test on init");
    this.displayEvents();
  }

  reloadPage() {
    this.router.navigateByUrl('/company-events');
  }

  displayEvents() {
    this.eventService.getEventsByCompany(this.companyService.getId()).subscribe((payload) => {
      console.log(payload);
      this.allEvents = payload;
      console.log(this.allEvents);
      for(var i = 0; i < this.allEvents.length ; i++) {
        this.allEvents[i].isCollapsed = true;  
      }
    });
  }

  removeFromRSVP(i){ 
    const rmRSVP = {
      b_id: this.companyService.getId(),
      e_id: this.allEvents[i].id
    };

    this.eventService.rmRSVP(rmRSVP.b_id, rmRSVP.e_id).subscribe((payload) => {
      this.displayEvents();
      this.reloadPage();
    });
  }

  toCompanyHome(){
    this.router.navigateByUrl('/company-home');
  }

  setEvent(i){
    this.eventService.setId(this.allEvents[i].id);
    this.eventService.setName(this.allEvents[i].name);
  }

  logout(){
    this.cookie.deleteAll();
    this.router.navigateByUrl('/front-page');
  }
}
