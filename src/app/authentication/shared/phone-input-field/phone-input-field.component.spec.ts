import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneInputFieldComponent } from './phone-input-field.component';

describe('PhoneInputFieldComponent', () => {
  let component: PhoneInputFieldComponent;
  let fixture: ComponentFixture<PhoneInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
