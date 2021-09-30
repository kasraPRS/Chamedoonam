import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopFullLayoutComponent } from './desktop-full-layout.component';

describe('DesktopFullLayoutComponent', () => {
  let component: DesktopFullLayoutComponent;
  let fixture: ComponentFixture<DesktopFullLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopFullLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopFullLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
