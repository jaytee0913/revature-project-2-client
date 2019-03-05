import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwEventMapComponent } from './veiw-event-map.component';

describe('VeiwEventMapComponent', () => {
  let component: VeiwEventMapComponent;
  let fixture: ComponentFixture<VeiwEventMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiwEventMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwEventMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
