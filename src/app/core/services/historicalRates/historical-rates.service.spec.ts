import { TestBed } from '@angular/core/testing';

import { HistoricalRatesService } from './historical-rates.service';

describe('HistoricalRatesService', () => {
  let service: HistoricalRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
