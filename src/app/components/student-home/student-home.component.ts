import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toFavorites(){
    this.router.navigateByUrl('/student-favs');
  }

  logout(){
    this.router.navigateByUrl('/front-page');
  }
}
