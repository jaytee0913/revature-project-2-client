import { Tags } from './../../models/tag/tag';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  // jobTitle: string = '';
  // city: string;
  // companyTags: Tags;
  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addListing() {}

  toCompanyHome() {
    this.router.navigateByUrl('/company-home');
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
