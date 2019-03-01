import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { CompanySignupComponent } from './components/company-signup/company-signup.component';
import { StudentSignupComponent } from './components/student-signup/student-signup.component';
import { CompanyHomeComponent } from './components/company-home/company-home.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { EventsComponent } from './components/events/events.component';
import { NewJobListingComponent } from './components/new-job-listing/new-job-listing.component';
import { CompanyEventsComponent } from './components/company-events/company-events.component';
import { StudentFavsComponent } from './components/student-favs/student-favs.component';
import { JobListingsComponent } from './components/job-listings/job-listings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FrontPageComponent,
    CompanySignupComponent,
    StudentSignupComponent,
    CompanyHomeComponent,
    StudentHomeComponent,
    EventsComponent,
    NewJobListingComponent,
    CompanyEventsComponent,
    StudentFavsComponent,
    JobListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
