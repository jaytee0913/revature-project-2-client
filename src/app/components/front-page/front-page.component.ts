import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  toLogin(){
    this.router.navigateByUrl('/login');
  }

  backHome(){
    this.router.navigateByUrl('/front-page');
  }

  toStudentSignup(){
    this.router.navigateByUrl('/student-signup');
  }

  toCompanySignup(){
    this.router.navigateByUrl('/company-signup');
  }

}
