import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-events',
  templateUrl: './company-events.component.html',
  styleUrls: ['./company-events.component.css']
})
export class CompanyEventsComponent implements OnInit {
  event = {
    isCollapsed: true,
    eventTitle: 'USF Engineering Career Fair',
    location: 'Tampa, FL',
    building: 'Events Center',
    address: '730 Olsen Blvd, College Station, TX 77843',
    date: '2016-06-22 19:10:25-07',
    photo: true
  };
  event2 = {
    isCollapsed: true,
    eventTitle: 'Georgia Computer Science Career Fair',
    location: 'Athens, GA',
    building: 'Bulldogs Building',
    address: '730 Olsen Blvd, College Station, TX 77843',
    date: '2017-11-09 15:10:25-07',
    photo: true
  };
  event3 = {
    isCollapsed: true,
    eventTitle: 'TAMU Business Career Fair',
    location: 'College Station, TX',
    building: 'Reed Arena',
    address: '730 Olsen Blvd, College Station, TX 77843',
    date: '2018-02-24 12:10:25-07',
    photo: true
  };
  
  allEvents: any = [this.event, this.event2, this.event3];


  constructor(private router: Router) { }

  ngOnInit() {
    this.displayJobListings();
  }

  displayJobListings() {}

  toCompanyHome(){
    this.router.navigateByUrl('/company-home');
  }

  logout(){
    this.router.navigateByUrl('/front-page');
  }
}
