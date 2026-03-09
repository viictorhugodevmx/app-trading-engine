import { TestBed } from '@angular/core/testing';

import { TradingEngineService } from './trading-engine.service';

describe('TradingEngineService', () => {
  let service: TradingEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradingEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
