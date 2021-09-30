import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachResidenceComponent } from './serach-residence.component';

describe('SerachResidenceComponent', () => {
  let component: SerachResidenceComponent;
  let fixture: ComponentFixture<SerachResidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachResidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
