import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobListingService } from 'src/app/services/job-listing.service';
import { CurrentJobService } from './../../services/current-job.service';

@Component({
  selector: 'app-delete-job-listing',
  templateUrl: './delete-job-listing.component.html',
  styleUrls: ['./delete-job-listing.component.css']
})
export class DeleteJobListingComponent implements OnInit {
  // jobTitle: String = 'Software Development Position';

  constructor(private modalService: NgbModal,
              private currentJobService: CurrentJobService,
              private jobService: JobListingService) {}

  ngOnInit(){}

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     if(result===0){
  //       this.jobService.deleteJobListing(this.currentJobServi);
  //       console.log('Confirmed'); // Delete listing from the database
  //     } else {
  //       console.log('Cancelled');
  //     }

  //   }, (reason) => {
  //     console.log('Closed');
  //   });
  // }

  // getJobTitle(){
  //   return '"' + this.jobTitle + '"';
  // }
}
