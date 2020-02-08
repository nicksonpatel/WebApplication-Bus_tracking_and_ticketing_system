import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBusComponent } from './login-bus.component';

describe('LoginBusComponent', () => {
  let component: LoginBusComponent;
  let fixture: ComponentFixture<LoginBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
