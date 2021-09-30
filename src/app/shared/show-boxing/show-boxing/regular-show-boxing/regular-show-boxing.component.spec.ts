import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularShowBoxingComponent } from './regular-show-boxing.component';

describe('RegularShowBoxingComponent', () => {
  let component: RegularShowBoxingComponent;
  let fixture: ComponentFixture<RegularShowBoxingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularShowBoxingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularShowBoxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
