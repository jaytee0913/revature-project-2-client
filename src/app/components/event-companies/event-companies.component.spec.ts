import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCompaniesComponent } from './event-companies.component';

describe('EventCompaniesComponent', () => {
  let component: EventCompaniesComponent;
  let fixture: ComponentFixture<EventCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
