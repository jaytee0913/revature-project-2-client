import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-job-listing',
  templateUrl: './new-job-listing.component.html',
  styleUrls: ['./new-job-listing.component.css']
})
export class NewJobListingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toCompanyHome() {
    this.router.navigateByUrl('/company-home');
  }

  toCompanyEvents() {
    this.router.navigateByUrl('/company-events');
  }

  logout(){
    this.router.navigateByUrl('/front-page');
  }
}
