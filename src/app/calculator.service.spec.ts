import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(CalculatorService);
    service.initFrames();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be perfect score', () => {
    for (let i = 0; i < 10; i++) {
      service.getRoll(10);
    }
    expect(service).toBe('300');
  });

  it('should be spare', () => {
    service.getRoll(0);
    service.getRoll(10);
  });

  it('should be a strike', () => {
  service.getRoll(10);
  expect(service).toBe(this.frame.isStrike === true);
  });
});
