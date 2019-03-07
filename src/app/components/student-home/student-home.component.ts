import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  constructor(private router: Router,
              private cookie: CookieService) {}

  ngOnInit() {
    if(this.cookie.get("student_id") == ''){
      this.router.navigateByUrl('/front-page');
    }
  }

  toFavorites(){
    this.router.navigateByUrl('/student-favs');
  }

  logout(){
    this.cookie.deleteAll();
    this.router.navigateByUrl('/front-page');
  }
}
