import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorDatePriceComponent } from './calculator-date-price.component';

describe('CalculatorDatePriceComponent', () => {
  let component: CalculatorDatePriceComponent;
  let fixture: ComponentFixture<CalculatorDatePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorDatePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorDatePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
