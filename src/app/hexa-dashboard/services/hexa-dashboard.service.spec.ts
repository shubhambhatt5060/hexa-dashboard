import { TestBed } from '@angular/core/testing';

import { HexaDashboardService } from './hexa-dashboard.service';

describe('HexaDashboardService', () => {
  let service: HexaDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HexaDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
