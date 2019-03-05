import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyViewMapComponent } from './company-view-map.component';

describe('CompanyViewMapComponent', () => {
  let component: CompanyViewMapComponent;
  let fixture: ComponentFixture<CompanyViewMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyViewMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyViewMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
