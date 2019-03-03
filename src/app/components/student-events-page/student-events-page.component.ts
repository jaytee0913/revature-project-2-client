import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-events-page',
  templateUrl: './student-events-page.component.html',
  styleUrls: ['./student-events-page.component.css']
})
export class StudentEventsPageComponent implements OnInit {
  event = {
    isCollapsed: true,
    eventTitle: 'TAMU Business Career Fair',
    location: 'College Station, TX',
    building: 'Reed Arena',
    date: '2018-02-24 12:10:25-07',
    photo: true
  };

  constructor(private router: Router) { }

  ngOnInit() {}
  
  toFavorites(){
    this.router.navigateByUrl('/student-favs');
  }

  toHome(){
    this.router.navigateByUrl('/student-home');
  }

  logout(){
    this.router.navigateByUrl('/front-page');
  }
}
