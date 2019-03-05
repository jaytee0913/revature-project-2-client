import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-company-view-map',
  templateUrl: './company-view-map.component.html',
  styleUrls: ['./company-view-map.component.css']
})
export class CompanyViewMapComponent implements OnInit {
  companyPassword: String;
  eventTitle: String = 'TAMU Career Fair';

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title'});
  }

  getEventTitle(){
    return '  ' + this.eventTitle;
  }

}
