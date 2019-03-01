import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-events',
  templateUrl: './company-events.component.html',
  styleUrls: ['./company-events.component.css']
})
export class CompanyEventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toCompanyHome(){
    this.router.navigateByUrl('/company-home');
  }

  logout(){
    this.router.navigateByUrl('/front-page');
  }
}
