import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAccommodationComponent } from './selected-accommodation.component';

describe('SelectedAccommodationComponent', () => {
  let component: SelectedAccommodationComponent;
  let fixture: ComponentFixture<SelectedAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedAccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
