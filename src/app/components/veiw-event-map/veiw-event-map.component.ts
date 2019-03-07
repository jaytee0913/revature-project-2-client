import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from './../../services/event.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiw-event-map',
  templateUrl: './veiw-event-map.component.html',
  styleUrls: ['./veiw-event-map.component.css']
})
export class VeiwEventMapComponent implements OnInit {
  companyPassword: String;

  constructor(private modalService: NgbModal,
              private cookie: CookieService,
              private router: Router,
              private eventService: EventService) {}

  ngOnInit() {
    if(this.cookie.get("student_id") == ''){
      this.router.navigateByUrl('/front-page');
    }
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title'});
  }

  getEventTitle(){
    return '  ' + this.eventService.name;
  }
}
