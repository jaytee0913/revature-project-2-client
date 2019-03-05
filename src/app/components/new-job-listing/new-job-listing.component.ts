import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobListing } from 'src/app/models/job-listing/job-listing';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-job-listing',
  templateUrl: './new-job-listing.component.html',
  styleUrls: ['./new-job-listing.component.css']
})
export class NewJobListingComponent implements OnInit {
  isDeleted: boolean = false;
  currentTag: string = '';
  maxTags: boolean = false;
  tags: string[] = [];

  
  

  constructor(private router: Router, private authService: AuthService) { }

  addNewJob() {}


  ngOnInit() {
  }

  addListing() {}

  toCompanyHome() {
    this.router.navigateByUrl('/company-home');
  }

  toCompanyEvents() {
    this.router.navigateByUrl('/company-events');
  }

  logout(){
    this.router.navigateByUrl('/front-page');
  }

  deleteTag(tag: string) {
      this.tags.splice(this.tags.indexOf(tag), 1)
  }

  addTag(tag: string) {
    if (this.tags.length < 5) {
      this.tags.push(tag);
    } 
    this.currentTag = '';
  }
  
  atMaxTags(): boolean{
    if (this.tags.length == 5) {
      return true;
    } else {
      return false;
    }
  }
}
