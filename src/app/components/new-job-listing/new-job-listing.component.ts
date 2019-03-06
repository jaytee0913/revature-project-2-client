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
  needed: string[] = []
  neededString: string = ``;

  newJob: JobListing = {
    jobTitle: '',
    city: '',
    state: '',
    department: '',
    type: '',
    description: '',
    tags: []
  };

  

  constructor(private router: Router, private authService: AuthService) { }


  ngOnInit() {
  }

  makeNeededString() {
    let i: number;
    if (this.needed.length == 1) {
      this.neededString += `${this.needed[0]}`;
    } else {
      for (i = 0; i < this.needed.length-1; i++) {
        this.neededString += `${this.needed[i]}, `;
      }
      this.neededString += `${this.needed[this.needed.length-1]}`;
    }
  }

  addListing() {
    if (this.validate()) {
      console.log(this.newJob); // CHANGE THIS LINE FOR DATA SENDING
    } else {
      this.makeNeededString();
      alert(`Please fill out the required fields: ${this.neededString}`);
      this.needed = [];
      this.neededString = '';
    }
  }

  validate(): boolean {
    if (this.newJob.jobTitle === '' || this.newJob.city === '' 
          || this.newJob.state === '' || this.newJob.department === ''
          || this.newJob.type === '' || this.newJob.description === '') {
      if (this.newJob.jobTitle === '') {
        this.needed.push("Job Title");
      }
      if (this.newJob.city === '') {
        this.needed.push("City");
      }
      if (this.newJob.state === '') {
        this.needed.push("State");
      }
      if (this.newJob.department === '') {
        this.needed.push("Department");
      }
      if (this.newJob.type === '') {
        this.needed.push("Job Type");
      }
      if (this.newJob.description === '') {
        this.needed.push("Description");
      }
      return false;
    } else {
      return true;
    }
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

  deleteTag(tag: string) {
      this.newJob.tags.splice(this.newJob.tags.indexOf(tag), 1)
  }

  addTag(tag: string) {
    if (this.newJob.tags.length < 5) {
      this.newJob.tags.push(tag);
    } 
    this.currentTag = '';
  }
  
  atMaxTags(): boolean{
    if (this.newJob.tags.length == 5) {
      return true;
    } else {
      return false;
    }
  }
}
