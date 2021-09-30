import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOtpComponent } from './get-otp.component';

describe('GetOtpComponent', () => {
  let component: GetOtpComponent;
  let fixture: ComponentFixture<GetOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
