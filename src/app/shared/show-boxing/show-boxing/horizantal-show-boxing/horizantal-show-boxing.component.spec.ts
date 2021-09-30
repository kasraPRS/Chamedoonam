import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizantalShowBoxingComponent } from './horizantal-show-boxing.component';

describe('HorizantalShowBoxingComponent', () => {
  let component: HorizantalShowBoxingComponent;
  let fixture: ComponentFixture<HorizantalShowBoxingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizantalShowBoxingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizantalShowBoxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
