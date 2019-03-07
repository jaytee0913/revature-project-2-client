import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFavsComponent } from './student-favs.component';

describe('StudentFavsComponent', () => {
  let component: StudentFavsComponent;
  let fixture: ComponentFixture<StudentFavsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFavsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
