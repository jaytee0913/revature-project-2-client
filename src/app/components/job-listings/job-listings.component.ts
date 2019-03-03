import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent implements OnInit {
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
  job2 = {
    isCollapsed: true,
    jobTitle: 'Computer Engineer',
    companyName: 'Apple',
    city: 'Los Angeles',
    state: 'CA',
    dept: 'Apples Top Software Team',
    description: 'Apple Life ekend to ourselves ! lol Sikeas;jjvn;ojdnva;sdjv asdvadv adjvanjdv adjvadsv ajidvad vwjdvchae vasvh adva eva vajdvha dv;ahvne skdvbnaksdv asdkvbas dviad vasd vaidv advajv',
    tags: ['Part-time', 'Apple']
  };
  job3 = {
    isCollapsed: true,
    jobTitle: 'Computer Developer',
    companyName: 'Microsoft',
    city: 'Atlanta',
    state: 'GA',
    dept: 'Micrpsoft Software Development Team',
    description: 'Best Job Ever! Microsoft Life!',
    tags: ['Internship', 'On Job Training', 'Fun', 'We are Microsoft']
  };
  location: any;
  allJobs: any = [this.job, this.job2, this.job3];

  constructor(private router: Router) { }

  ngOnInit() {
    this.displayJobListings();
  }

  displayJobListings() {}

  addToFavorites(){
    //
  }

  getLocation(i){
    this.location = this.allJobs[i].city + ', ' + this.allJobs[i].state;
    return this.location;
  }
}
