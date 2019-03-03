import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-job-listings',
  templateUrl: './company-job-listings.component.html',
  styleUrls: ['./company-job-listings.component.css']
})

export class CompanyJobListingsComponent implements OnInit {
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
  location: any;
  allJobs: any = [this.job, this.job2, this.job3];

  constructor(private router: Router) { }

  ngOnInit() {
    this.displayJobListings();
  }

  displayJobListings() {}

  toNewListing(){
    this.router.navigateByUrl('/new-job-listing');
  }

  deleteJobListing() {
    // delete listing
  }

  getLocation(i){
    this.location = this.allJobs[i].city + ', ' + this.allJobs[i].state;
    return location;
  }
}
