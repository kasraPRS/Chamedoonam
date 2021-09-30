import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalShowBoxingComponent } from './vertical-show-boxing.component';

describe('VerticalShowBoxingComponent', () => {
  let component: VerticalShowBoxingComponent;
  let fixture: ComponentFixture<VerticalShowBoxingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalShowBoxingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalShowBoxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
