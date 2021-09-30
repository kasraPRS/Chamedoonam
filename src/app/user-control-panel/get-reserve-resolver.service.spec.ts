import { TestBed } from '@angular/core/testing';

import { GetReserveResolverService } from './get-reserve-resolver.service';

describe('GetReserveResolverService', () => {
  let service: GetReserveResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetReserveResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
