import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusprofileComponent } from './busprofile.component';

describe('BusprofileComponent', () => {
  let component: BusprofileComponent;
  let fixture: ComponentFixture<BusprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
