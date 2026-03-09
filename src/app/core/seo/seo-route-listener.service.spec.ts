import { TestBed } from '@angular/core/testing';

import SeoRouteListenerService from './seo-route-listener.service';

describe('SeoRouteListenerService', () => {
  let service: SeoRouteListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoRouteListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
