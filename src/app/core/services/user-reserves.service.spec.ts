import { TestBed } from '@angular/core/testing';

import { UserReservesService } from './user-reserves.service';

describe('UserReservesService', () => {
  let service: UserReservesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserReservesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
