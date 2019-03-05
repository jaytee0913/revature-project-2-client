import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-job-listing',
  templateUrl: './delete-job-listing.component.html',
  styleUrls: ['./delete-job-listing.component.css']
})
export class DeleteJobListingComponent implements OnInit {
  jobTitle: String = 'Software Development Position';

  constructor(private modalService: NgbModal) {}

  ngOnInit(){}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if(result===0){
        console.log('Confirmed'); // Delete listing from the database
      } else {
        console.log('Cancelled');
      }

    }, (reason) => {
      console.log('Closed');
    });
  }

  getJobTitle(){
    return '"' + this.jobTitle + '"';
  }
}
