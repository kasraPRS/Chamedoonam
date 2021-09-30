import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPhoneNumberComponent } from './get-phone-number.component';

describe('GetPhoneNumberComponent', () => {
  let component: GetPhoneNumberComponent;
  let fixture: ComponentFixture<GetPhoneNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPhoneNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
