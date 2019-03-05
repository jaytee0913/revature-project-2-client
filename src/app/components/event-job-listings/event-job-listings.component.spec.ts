import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventJobListingsComponent } from './event-job-listings.component';

describe('EventJobListingsComponent', () => {
  let component: EventJobListingsComponent;
  let fixture: ComponentFixture<EventJobListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventJobListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventJobListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
