import { TestBed } from '@angular/core/testing';

import { EnteredAmountService } from './entered-amount.service';

describe('EnteredAmountService', () => {
  let service: EnteredAmountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnteredAmountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
