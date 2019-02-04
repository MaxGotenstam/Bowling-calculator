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
    //expect(service).toBeTruthy();
  });
});
