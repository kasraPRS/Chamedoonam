import { TestBed } from '@angular/core/testing';

import { ReservationGuard } from './reservation.guard';

describe('ReservationGuard', () => {
  let guard: ReservationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReservationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
