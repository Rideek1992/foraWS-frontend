import { TestBed } from '@angular/core/testing';

import { ApibackandService } from './apibackand.service';

describe('ApibackandService', () => {
  let service: ApibackandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApibackandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
