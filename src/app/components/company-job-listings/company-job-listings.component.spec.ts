import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyJobListingsComponent } from './company-job-listings.component';

describe('CompanyJobListingsComponent', () => {
  let component: CompanyJobListingsComponent;
  let fixture: ComponentFixture<CompanyJobListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyJobListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyJobListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
