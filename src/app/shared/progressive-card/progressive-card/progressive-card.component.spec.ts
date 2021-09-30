import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveCardComponent } from './progressive-card.component';

describe('ProgressiveCardComponent', () => {
  let component: ProgressiveCardComponent;
  let fixture: ComponentFixture<ProgressiveCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressiveCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
