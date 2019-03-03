import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  studentEmail: string;
  studentPassword: string;

  companyUsername: string;
  companyPassword: string;

  constructor(private router: Router,
              private authService: AuthService) {}

  ngOnInit() {}

  backHome(){
    this.router.navigateByUrl('/front-page');
  }

  //calls the auth service to authenticate the credentials, then routes users depending on the result
  studentLogin() {
    console.log(this.studentEmail);
    console.log(this.studentPassword);
    
    this.authService.authenticate(this.studentEmail, this.studentPassword,
        () => this.router.navigateByUrl('/student-home'),
        (err) => {
          this.router.navigate(['/login']);
          console.log(err);
          console.log('not logged in');
        });
  }

  companyLogin() {
    console.log(this.companyUsername);
    console.log(this.companyPassword);
    
    this.authService.authenticate(this.companyUsername, this.companyPassword,
        () => this.router.navigateByUrl('/company-home'),
        (err) => {
          this.router.navigate(['/login']);
          console.log(err);
          console.log('not logged in');
        });
  }
}
