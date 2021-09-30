import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpInputFieldComponent } from './otp-input-field.component';

describe('OtpInputFieldComponent', () => {
  let component: OtpInputFieldComponent;
  let fixture: ComponentFixture<OtpInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
