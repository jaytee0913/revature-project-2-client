import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEventsPageComponent } from './student-events-page.component';

describe('StudentEventsPageComponent', () => {
  let component: StudentEventsPageComponent;
  let fixture: ComponentFixture<StudentEventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEventsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
