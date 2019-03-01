import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-favs',
  templateUrl: './student-favs.component.html',
  styleUrls: ['./student-favs.component.css']
})
export class StudentFavsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toStudentHome(){
    this.router.navigateByUrl('/student-home');
  }

  logout(){
    this.router.navigateByUrl('/front-page');
  }
}
