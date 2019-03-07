import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobListingService } from 'src/app/services/job-listing.service';
import { CompanyService } from './../../services/company.service';
import { Job } from 'src/app/models/job.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-company-job-listings',
  templateUrl: './company-job-listings.component.html',
  styleUrls: ['./company-job-listings.component.css']
})

export class CompanyJobListingsComponent implements OnInit {
  companyName: String = this.companyService.getName();
  page: Number = 1;
  pageSize: Number = 5;
  collectionSize: Number = 5;
  allJobs: Array<Job>;

  constructor(private router: Router,
              private modalService: NgbModal,
              private cookie: CookieService,
              private jobService: JobListingService,
              private companyService: CompanyService) {}

  ngOnInit() {
    if(this.cookie.get("company_id") == ''){
      this.router.navigateByUrl('/front-page');
    }
    this.displayJobListings();
  }

  open(content, i: number) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if(result===0){
        this.jobService.deleteJobListing(this.allJobs[i].id).subscribe((payload) => {
          this.allJobs[i] = payload;
        });
        this.displayJobListings();
        console.log('Confirmed');
      } else {
        console.log('Cancelled');
      }

    }, (reason) => {
      console.log('Closed');
    });
  }

  displayJobListings() {
    console.log("listing");
    this.jobService.getJobsByCompany(this.companyService.id).subscribe ((payload) => {
      this.allJobs = payload;
      for(var i = 0; i < this.allJobs.length; i++){
        if(this.allJobs[i].active == false){
          this.allJobs.splice(i,1);
        }
      }
      console.log(this.allJobs);
      this.collectionSize = this.allJobs.length;
      for(var i = 0; i < this.allJobs.length ; i++) {
        this.allJobs[i].isCollapsed = true;  
      }
    });
  }

  toNewListing(){
    this.router.navigateByUrl('/new-job-listing');
  }

}
