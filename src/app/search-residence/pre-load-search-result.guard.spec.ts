import { TestBed } from '@angular/core/testing';

import { PreLoadSearchResultGuard } from './pre-load-search-result.guard';

describe('PreLoadSearchResultGuard', () => {
  let guard: PreLoadSearchResultGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreLoadSearchResultGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
