import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toCompanyEvents(){
    this.router.navigateByUrl('/company-events');
  }

  logout(){
    this.router.navigateByUrl('/front-page');
  }
}
