import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusHomeComponent } from './bus-home.component';

describe('BusHomeComponent', () => {
  let component: BusHomeComponent;
  let fixture: ComponentFixture<BusHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
