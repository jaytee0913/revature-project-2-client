import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-companies',
  templateUrl: './event-companies.component.html',
  styleUrls: ['./event-companies.component.css']
})
export class EventCompaniesComponent implements OnInit {
  page: Number = 1;
  pageSize: Number = 10;
  collectionSize: Number = 5;
  allCompanies: Array<Company>;

  constructor(private router: Router,
              private companyService: CompanyService,
              private eventService: EventService,
              private cookie: CookieService) {}

  ngOnInit() {
    if(this.cookie.get("student_id") == ''){
      this.router.navigateByUrl('/front-page');
    }
    this.displayCompanies();
  }

  displayCompanies() {
    this.eventService.getCompaniesByEvent(this.eventService.getId()).subscribe ((payload) => {
      this.allCompanies = payload;
      //console.log(this.allEvents);
     
      this.collectionSize = this.allCompanies.length;
      for(var i = 0; i < this.allCompanies.length ; i++) {
        this.allCompanies[i].isCollapsed = true;   
      }
    });
  }
  
}
