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
import { CompanyJobListingsComponent } from './components/company-job-listings/company-job-listings.component';
import { CompanyEventsComponent } from './components/company-events/company-events.component';
import { NewJobListingComponent } from './components/new-job-listing/new-job-listing.component';
import { StudentEventsPageComponent } from './components/student-events-page/student-events-page.component';
import { CompanyEventsPageComponent } from './components/company-events-page/company-events-page.component';

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
      component: EventsComponent,
      outlet: 'student-home'
    }, {
      path: 'job-listings',
      component: JobListingsComponent,
      outlet: 'student-home'
    }]
  },{
    path: 'company-home',
    component: CompanyHomeComponent,
    children: [{
      path: 'events',
      component: EventsComponent,
      outlet: 'company-home'
    }, {
      path: 'company-job-listings',
      component: CompanyJobListingsComponent,
      outlet: 'company-home'
    }]
  },{
    path: 'student-favs',
    component: StudentFavsComponent
  },{
    path: 'company-events',
    component: CompanyEventsComponent
  },{
    path: 'new-job-listing',
    component: NewJobListingComponent
  },{
    path: 'student-events-page',
    component: StudentEventsPageComponent
  }, {
    path: 'company-events-page',
    component: CompanyEventsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
