import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobListingService } from './../../services/job-listing.service';
import { CompanyService } from './../../services/company.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-new-job-listing',
  templateUrl: './new-job-listing.component.html',
  styleUrls: ['./new-job-listing.component.css']
})
export class NewJobListingComponent implements OnInit {
  id: Number = this.companyService.getId();

  jobTitle: String;
  city: String;
  state: String;
  department: String;
  description: String;
  type: String;
  major: String;

  constructor(private router: Router,
              private cookie: CookieService,
              private companyService: CompanyService,
              private jobService: JobListingService) { }

  ngOnInit() {
    if(this.cookie.get("company_id") == ''){
      this.router.navigateByUrl('/front-page');
    }
  }

  toCompanyHomeAdd() {
    const job = {
      business_id: this.id,
      name: this.jobTitle,
      location_city: this.city,
      location_state: this.state,
      department: this.department,
      description: this.description,
      type: this.type,
      major: this.major
    }
    
    this.jobService.createJob(job).subscribe ((payload) => {});
    this.router.navigateByUrl('/company-home');
  }

  toCompanyHome() {
    this.router.navigateByUrl('/company-home');
  }

  toCompanyEvents() {
    this.router.navigateByUrl('/company-events');
  }

  logout(){
    this.cookie.deleteAll();
    this.router.navigateByUrl('/front-page');
  }
}
