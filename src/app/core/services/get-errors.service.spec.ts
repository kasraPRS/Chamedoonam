import { TestBed } from '@angular/core/testing';

import { GetErrorsService } from './get-errors.service';

describe('GetErrorsService', () => {
  let service: GetErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
