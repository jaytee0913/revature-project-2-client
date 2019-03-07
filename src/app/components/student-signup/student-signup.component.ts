import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


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

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  studentSignUp() {
    const signupInput = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    this.authService.studentSignUp(signupInput).subscribe(
      (result) => {
          this.router.navigateByUrl('/login');
        }, (error) => {
          window.alert('Invalid credentials');
        }
    )
  }

}
