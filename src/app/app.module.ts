// Let * be the statement "the preceding is necessary for Angular Material"
// There are other dependencies located in material.module.ts and styles.css.

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; //*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CompanyJobListingsComponent } from './components/company-job-listings/company-job-listings.component';
import { AuthService } from './services/auth.service';
import { StudentService } from './services/student.service';
import { CompanyService } from './services/company.service';
import { MaterialModule } from './material.module'; //*
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    JobListingsComponent,
    CompanyJobListingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
   // MaterialModule, //*
    ],
  providers: [AuthService, StudentService, CompanyService], //, MaterialModule], //*
  bootstrap: [AppComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA] //*
})
export class AppModule { }
