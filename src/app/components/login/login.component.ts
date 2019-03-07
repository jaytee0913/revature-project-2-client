import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Company } from 'src/app/models/company.model';
import { Student } from 'src/app/models/student.model';
import { StudentService } from './../../services/student.service';
import { CompanyService } from './../../services/company.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cookieValue = 'UNKNOWN';
  companyPayload: Company;
  studentPayload: Student;

  studentEmail: string;
  studentPassword: string;

  companyUsername: string;
  companyPassword: string;

  constructor(private router: Router,
              private authService: AuthService,
              private cookie: CookieService,
              private studentService: StudentService,
              private companyService: CompanyService) {}

  ngOnInit() {}

  backHome(){
    this.router.navigateByUrl('/front-page');
  }

  companyLogin() {
    const credentials = {
      username: this.companyUsername,
      password: this.companyPassword
    };

    this.authService.companyLogin(credentials).subscribe ((payload) => {
      this.companyPayload = payload;
      const company = JSON.parse(JSON.stringify(payload));
      this.companyService.setId(company.id);
      this.cookie.set("company_id", company.id);
      this.companyService.setUsername(company.username);
      this.companyService.setName(company.companyName);
      console.log(this.companyService.getName());

      this.router.navigateByUrl('/company-home');
    }, (err) => {
      console.log(err);
      window.alert("Invalid Credentials!");
    });
  }

  studentLogin() {
    const credentials = {
      email: this.studentEmail,
      password: this.studentPassword
    };

    this.authService.studentLogin(credentials).subscribe ((payload) => {
      this.studentPayload = payload;
      const student = JSON.parse(JSON.stringify(payload));
      this.cookie.set("student_id", student.id);
      this.studentService.setId(student.id);
      this.studentService.setEmail(student.email);

      this.router.navigateByUrl('/student-home');
    }, (err) => {
      console.log(err);
      window.alert("Invalid Credentials!");
    });
  }

}
