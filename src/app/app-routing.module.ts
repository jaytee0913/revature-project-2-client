import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { StudentSignupComponent } from './components/student-signup/student-signup.component';
import { CompanySignupComponent } from './components/company-signup/company-signup.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { CompanyHomeComponent } from './components/company-home/company-home.component';
import { StudentFavsComponent } from './components/student-favs/student-favs.component';
import { EventsComponent } from './components/events/events.component';
import { JobListingsComponent } from './components/job-listings/job-listings.component';

const routes: Routes = [
  // redirect empty path to login
  {
    path: '',
    component: FrontPageComponent
  },{
    path: 'front-page',
    component: FrontPageComponent
  },{
    path: 'login',
    component: LoginComponent
  },{
    path: 'student-signup',
    component: StudentSignupComponent
  },{
    path: 'company-signup',
    component: CompanySignupComponent
  },{
    path: 'student-home',
    component: StudentHomeComponent,
    children: [{
      path: 'events',
      component: EventsComponent
    }, {
      path: 'job-listings',
      component: JobListingsComponent
    }]
  },{
    path: 'company-home',
    component: CompanyHomeComponent
  },{
    path: 'student-favs',
    component: StudentFavsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
