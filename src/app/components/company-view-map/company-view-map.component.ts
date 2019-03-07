import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/services/event.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-view-map',
  templateUrl: './company-view-map.component.html',
  styleUrls: ['./company-view-map.component.css']
})
export class CompanyViewMapComponent implements OnInit {
  companyPassword: String;

  constructor(private modalService: NgbModal,
              private cookie: CookieService,
              private router: Router,
              private eventService: EventService) { }

  ngOnInit() {
    if(this.cookie.get("company_id") == ''){
      this.router.navigateByUrl('/front-page');
    }
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title'});
  }

  getEventTitle(){
    console.log(this.eventService.name);
    return '  ' + this.eventService.name;
  }

}
