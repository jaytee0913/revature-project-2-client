import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJobListingComponent } from './new-job-listing.component';

describe('NewJobListingComponent', () => {
  let component: NewJobListingComponent;
  let fixture: ComponentFixture<NewJobListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJobListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
