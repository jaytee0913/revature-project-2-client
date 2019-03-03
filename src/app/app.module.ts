import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 

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
import { CompanyJobListingsComponent } from './components/company-job-listings/company-job-listings.component';
import { AuthService } from './services/auth.service';
import { StudentService } from './services/student.service';
import { CompanyService } from './services/company.service';
import { DeleteJobListingComponent } from './components/delete-job-listing/delete-job-listing.component';
import { VeiwEventMapComponent } from './components/veiw-event-map/veiw-event-map.component';
import { StudentEventsPageComponent } from './components/student-events-page/student-events-page.component';
import { CompanyEventsPageComponent } from './components/company-events-page/company-events-page.component';


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
    CompanyJobListingsComponent,
    DeleteJobListingComponent,
    VeiwEventMapComponent,
    StudentEventsPageComponent,
    CompanyEventsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
    ],
  providers: [AuthService, StudentService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
