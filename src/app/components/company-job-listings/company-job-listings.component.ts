import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-job-listings',
  templateUrl: './company-job-listings.component.html',
  styleUrls: ['./company-job-listings.component.css']
})//<!-- comp name, job name, city, state, dept, tags -->
export class CompanyJobListingsComponent implements OnInit {
  job = {
    isCollapsed: true,
    jobTitle: 'Computer Engineer',
    companyName: 'Revature',
    city: 'Tampa',
    state: 'FL',
    dept: 'Software Development Team',
    description: 'Best Job Ever! We get every weekend to ourselves ! lol Sikeas;jjvn;ojdnva;sdjv asdvadv adjvanjdv adjvadsv ajidvad vwjdvchae vasvh adva eva vajdvha dv;ahvne skdvbnaksdv asdkvbas dviad vasd vaidv advajv',
    tags: ['Full-time', 'Training', 'Fun']
  };

  constructor() { }

  ngOnInit() {
    this.displayJobListings();
  }

  displayJobListings() {

  }
}
