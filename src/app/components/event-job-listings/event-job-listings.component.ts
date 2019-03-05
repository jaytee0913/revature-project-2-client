import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-job-listings',
  templateUrl: './event-job-listings.component.html',
  styleUrls: ['./event-job-listings.component.css']
})
export class EventJobListingsComponent implements OnInit {
  job = {
    isCollapsed: true,
    jobTitle: 'Computer Engineer',
    companyName: 'Revature',
    city: 'Tampa',
    state: 'FL',
    type: 'Full-Time',
    dept: 'Software Development Team',
    isFavorite: true,
    description: 'Best Job Ever! We get every weekend to ourselves ! lol Sikeas;jjvn;ojdnva;sdjv asdvadv adjvanjdv adjvadsv ajidvad vwjdvchae vasvh adva eva vajdvha dv;ahvne skdvbnaksdv asdkvbas dviad vasd vaidv advajv',
    tags: ['Full-time', 'Training', 'Fun']
  };
  job2 = {
    isCollapsed: true,
    jobTitle: 'Computer Engineer',
    companyName: 'Apple',
    city: 'Los Angeles',
    state: 'CA',
    type: 'Part-Time',
    dept: 'Apples Top Software Team',
    isFavorite: false,
    description: 'Apple Life ekend to ourselves ! lol Sikeas;jjvn;ojdnva;sdjv asdvadv adjvanjdv adjvadsv ajidvad vwjdvchae vasvh adva eva vajdvha dv;ahvne skdvbnaksdv asdkvbas dviad vasd vaidv advajv',
    tags: ['Part-time', 'Apple']
  };
  job3 = {
    isCollapsed: true,
    jobTitle: 'Computer Developer',
    companyName: 'Microsoft',
    city: 'Atlanta',
    state: 'GA',
    type: 'Internship',
    dept: 'Micrpsoft Software Development Team',
    isFavorite: false,
    description: 'Best Job Ever! Microsoft Life!',
    tags: ['Internship', 'On Job Training', 'Fun', 'We are Microsoft']
  };
  page: Number = 1;
  jobListSize: Number = 40;
  location: any;
  allJobs: any = [this.job, this.job2, this.job3];

  constructor() { }

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
