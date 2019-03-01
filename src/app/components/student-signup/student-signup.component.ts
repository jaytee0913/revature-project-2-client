import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  studentSignUp() {
    console.log(this.email);
    console.log(this.password);
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.confirmPassword);
    this.router.navigateByUrl('/login');
    // this.authService.authenticate(this.email, this.password,
    //     () => this.router.navigate(['/viewprofile']),
    //     (err) => {
    //       this.router.navigate(['/']);
    //       console.log(err);
    //       console.log('not logged in');
    //     });
  }

}
