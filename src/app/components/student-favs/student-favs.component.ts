import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobListingService } from 'src/app/services/job-listing.service';
import { StudentService } from 'src/app/services/student.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-student-favs',
  templateUrl: './student-favs.component.html',
  styleUrls: ['./student-favs.component.css']
})

export class StudentFavsComponent implements OnInit {
  page: Number = 1;
  pageSize: Number = 5;
  collectionSize: Number = 5;
  location: any;
  allJobs: any;

  constructor(private router: Router,
              private cookie: CookieService,
              private studentService: StudentService,
              private jobService: JobListingService) { }

  ngOnInit() {
    if(this.cookie.get("student_id") == ''){
      this.router.navigateByUrl('/front-page');
    }
    this.displayJobListings(this.studentService.getId());
  }

  toStudentHome(){
    this.router.navigateByUrl('/student-home');
  }

  reloadPage() {
    this.router.navigateByUrl('/student-favs');
  }

  displayJobListings(id: Number) {
    this.jobService.getFavJobs(id).subscribe ((payload) => {
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

  removeFromFavorites(i){
    const rmJob = {
      jobId: this.allJobs[i].id,
      studentId: this.studentService.getId()
    };

    this.jobService.rmFav(rmJob.studentId,rmJob.jobId).subscribe((payload) => {
      this.displayJobListings(this.studentService.getId());
      this.reloadPage();
    });
  }

  logout(){
    this.cookie.deleteAll();
    this.router.navigateByUrl('/front-page');
  }
}
