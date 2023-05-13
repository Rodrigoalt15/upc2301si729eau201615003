import { TestBed } from '@angular/core/testing';

import { MarathonCenterService } from './marathon-center.service';

describe('MarathonCenterService', () => {
  let service: MarathonCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarathonCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
