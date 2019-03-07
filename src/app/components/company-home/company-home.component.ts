import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent implements OnInit {

  constructor(private router: Router,
              private cookie: CookieService) { }

  ngOnInit() {
    if(this.cookie.get("company_id") == ''){
      this.router.navigateByUrl('/front-page');
    }
  }

  toCompanyEvents(){
    // console.log("to company events");
    this.router.navigateByUrl('/company-events');
  }

  logout(){
    this.cookie.deleteAll();
    this.router.navigateByUrl('/front-page');
  }
}
