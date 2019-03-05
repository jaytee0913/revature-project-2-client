import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-events-page',
  templateUrl: './company-events-page.component.html',
  styleUrls: ['./company-events-page.component.css']
})
export class CompanyEventsPageComponent implements OnInit {
  event = {
    isCollapsed: true,
    eventTitle: 'USF Engineering Career Fair',
    location: 'Tampa, FL',
    building: 'Events Center',
    date: '2016-06-22 19:10:25-07',
    description: 'This career fair hosts admission representatives of historically more than 200 colleges and universities located in the Chicago-land area, national programs, and international programs. Attendees may obtain information on a variety of graduate and professional programs as well as obtain advice about the application process.',
    contactEmail: 'abby@aol.com',
    contactName: 'Abby Arby',
    photo: true
  };
  event2 = {
    isCollapsed: true,
    eventTitle: 'Georgia Computer Science Career Fair',
    location: 'Athens, GA',
    building: 'Bulldogs Building',
    date: '2017-11-09 15:10:25-07',
    description: 'This job fair is coordinated by the UIC Student Employment Office (SEO) and open to UIC students and alumni. The fair hosts employers offering internships, part-time employment, seasonal employment , and full-time employment opportunities across all majors.',
    contactEmail: 'ben@barney.com',
    contactName: 'Ben Benny',
    photo: true
  };
  event3 = {
    isCollapsed: true,
    eventTitle: 'TAMU Business Career Fair',
    location: 'College Station, TX',
    building: 'Reed Arena',
    date: '2018-02-24 12:10:25-07',
    description: '	This fair is UIC’s only job fair during the summer semester. The fair hosts employers from various industries including Technology, Government, Health Care, Nonprofit, and Education. Employers frequently offer full-time employment, part-time employment, and internship opportunities.',
    contactEmail: 'candy@candyland.com',
    contactName: 'Candy Carter',
    photo: true
  };
  
  allEvents: any = [this.event, this.event2, this.event3];

  constructor() { }

  ngOnInit() {
    this.displayEvents();
  }
  
  displayEvents() {}

  rsvpToEvent(i){
    console.log("RSVP'd for " + this.allEvents[i].eventTitle);
  }

}
