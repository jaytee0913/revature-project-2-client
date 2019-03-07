import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.css']
})
export class CompanySignupComponent implements OnInit {
  companyName: string;
  username: string;
  description: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  companySignup(){
    const signupInput = {
      companyName: this.companyName,
      username: this.username,
      description: this.description,
      password: this.password
    };

    this.authService.companySignUp(signupInput).subscribe(
      (result) => {
          this.router.navigateByUrl('/login');
        }, (error) => {
          window.alert('Invalid credentials');
        }
    )
  }

}
