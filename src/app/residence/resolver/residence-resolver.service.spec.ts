import { TestBed } from '@angular/core/testing';

import { ResidenceResolverService } from './residence-resolver.service';

describe('ResidenceResolverService', () => {
  let service: ResidenceResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidenceResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
