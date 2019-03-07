import { Component, OnInit } from '@angular/core';
import { JobListingService } from './../../services/job-listing.service';
import { Job } from 'src/app/models/job.model';
import { StudentService } from './../../services/student.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.css']
})
export class JobListingsComponent implements OnInit {
  page: Number = 1;
  pageSize: Number = 10;
  collectionSize: Number = 5;
  allJobs: Array<Job>;
  companyName: String;

  constructor(private jobService: JobListingService,
              private cookie: CookieService,
              private router: Router,
              private studentService: StudentService) {}

  ngOnInit() {
    if(this.cookie.get("student_id") == ''){
      this.router.navigateByUrl('/front-page');
    }
    this.displayJobListings();
  }

  displayJobListings() {
    this.jobService.getJobs().subscribe ((payload) => {
      this.allJobs = payload;
      console.log(this.allJobs);
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

  addToFavorites(i){
    const favJob = {
      jobId: this.allJobs[i].id,
      studentId: this.studentService.getId()
    };

    this.jobService.addToFavorites(favJob).subscribe ((payload) => {
      window.alert("Job Favorite Confirmed!");
    });
  }

}
