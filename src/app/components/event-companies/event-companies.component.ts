import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-companies',
  templateUrl: './event-companies.component.html',
  styleUrls: ['./event-companies.component.css']
})
export class EventCompaniesComponent implements OnInit {
  company = {
    isCollapsed: true,
    companyName: 'Revature',
    description: 'Revature invests in every employee by providing ongoing training in the latest technologies. We know what technologies skills are in demand and make sure all our employees have the next gen skills they need to be successful. Our proprietary training curriculum is based on immersion in a subject and the concept of becoming a continuous “learning animal.”',
    photo: true
  };
  company1 = {
    isCollapsed: true,
    companyName: 'Bank Of America',
    description: 'At Bank of America, we have a clear purpose to help make financial lives better through the power of every connection. We fulfill this purpose through a strategy of responsible growth, which includes a focus on environmental, social and governance leadership.',
    photo: true
  };
  company2 = {
    isCollapsed: true,
    companyName: 'Microsoft',
    description: 'Microsoft is the ideal place for people who have passion for their work and the desire to make an impact—in their careers, in the community and on the world. Microsoft is a unique company; and not just within the tech industry. Here, smart people thrive on their own terms and push their intelligence to its limit. The variety of job opportunities and career advancement at Microsoft is incredible and empowers you to constantly challenge yourself and chart your own course.',
    photo: true
  };
  company3 = {
    isCollapsed: true,
    companyName: 'Google',
    description: 'Revature invests in every employee by providing ongoing training in the latest technologies. We know what technologies skills are in demand and make sure all our employees have the next gen skills they need to be successful. Our proprietary training curriculum is based on immersion in a subject and the concept of becoming a continuous “learning animal.”',
    photo: true
  };
  company4 = {
    isCollapsed: true,
    companyName: 'Walmart',
    description: 'At Bank of America, we have a clear purpose to help make financial lives better through the power of every connection. We fulfill this purpose through a strategy of responsible growth, which includes a focus on environmental, social and governance leadership.',
    photo: true
  };
  company5 = {
    isCollapsed: true,
    companyName: 'Amazon',
    description: 'Microsoft is the ideal place for people who have passion for their work and the desire to make an impact—in their careers, in the community and on the world. Microsoft is a unique company; and not just within the tech industry. Here, smart people thrive on their own terms and push their intelligence to its limit. The variety of job opportunities and career advancement at Microsoft is incredible and empowers you to constantly challenge yourself and chart your own course.',
    photo: true
  };
  
  allCompanies: any = [this.company, this.company1, this.company2, this.company3, this.company4, this.company5];

  constructor() { }

  ngOnInit() {
    this.displayCompanies();
  }

  displayCompanies() {}
}
