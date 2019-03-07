import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJobListingComponent } from './delete-job-listing.component';

describe('DeleteJobListingComponent', () => {
  let component: DeleteJobListingComponent;
  let fixture: ComponentFixture<DeleteJobListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteJobListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJobListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
