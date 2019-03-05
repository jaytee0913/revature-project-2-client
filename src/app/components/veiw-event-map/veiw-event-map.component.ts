import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-veiw-event-map',
  templateUrl: './veiw-event-map.component.html',
  styleUrls: ['./veiw-event-map.component.css']
})
export class VeiwEventMapComponent implements OnInit {
  companyPassword: String;
  eventTitle: String = 'TAMU Career Fair';

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title'});
  }

  getEventTitle(){
    return '  ' + this.eventTitle;
  }
}
