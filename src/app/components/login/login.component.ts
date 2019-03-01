import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  studentEmail: string;
  studentPassword: string;

  companyEmail: string;
  companyPassword: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  backHome(){
    this.router.navigateByUrl('/front-page');
  }

  //calls the auth service to authenticate the credentials, then routes users depending on the result
  studentLogin() {
    console.log(this.studentEmail);
    console.log(this.studentPassword);
    this.router.navigateByUrl('/student-home');
    // this.authService.authenticate(this.email, this.password,
    //     () => this.router.navigate(['/viewprofile']),
    //     (err) => {
    //       this.router.navigate(['/']);
    //       console.log(err);
    //       console.log('not logged in');
    //     });
  }

  companyLogin() {
    console.log(this.companyEmail);
    console.log(this.companyPassword);
    this.router.navigateByUrl('/company-home');
    // this.authService.authenticate(this.email, this.password,
    //     () => this.router.navigate(['/viewprofile']),
    //     (err) => {
    //       this.router.navigate(['/']);
    //       console.log(err);
    //       console.log('not logged in');
    //     });
  }
}
