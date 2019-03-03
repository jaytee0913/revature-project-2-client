import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyEventsPageComponent } from './company-events-page.component';

describe('CompanyEventsPageComponent', () => {
  let component: CompanyEventsPageComponent;
  let fixture: ComponentFixture<CompanyEventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyEventsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
