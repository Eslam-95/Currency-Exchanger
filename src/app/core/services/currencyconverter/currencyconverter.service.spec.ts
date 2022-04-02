import { TestBed } from '@angular/core/testing';

import { CurrencyconverterService } from './currencyconverter.service';

describe('CurrencyconverterService', () => {
  let service: CurrencyconverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyconverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
