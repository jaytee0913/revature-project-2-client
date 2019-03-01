import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.css']
})
export class CompanySignupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  companySignup(){
    this.router.navigateByUrl('/login');
  }

}
