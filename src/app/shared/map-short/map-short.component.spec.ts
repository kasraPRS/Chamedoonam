import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapShortComponent } from './map-short.component';

describe('MapShortComponent', () => {
  let component: MapShortComponent;
  let fixture: ComponentFixture<MapShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
