import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileControlComponent } from './user-profile-control.component';

describe('UserProfileControlComponent', () => {
  let component: UserProfileControlComponent;
  let fixture: ComponentFixture<UserProfileControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileControlComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
