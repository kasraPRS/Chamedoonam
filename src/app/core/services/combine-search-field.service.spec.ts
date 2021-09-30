import { TestBed } from '@angular/core/testing';

import { CombineSearchFieldService } from './combine-search-field.service';

describe('CombineSearchFieldService', () => {
  let service: CombineSearchFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombineSearchFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
