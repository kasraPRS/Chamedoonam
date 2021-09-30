import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserOtpComponent } from './get-user-otp.component';

describe('GetUserOtpComponent', () => {
  let component: GetUserOtpComponent;
  let fixture: ComponentFixture<GetUserOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUserOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
