import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(CalculatorService);
    service.initFrames();
    console.log(service.frames);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be normal', () => {
    service.getRoll(3);
    service.getRoll(4);
    expect(service.balls[1].isSpare && service.balls[1].isStrike).toBe(false);
  });

  it('should be spare', () => {
    service.getRoll(0);
    service.getRoll(10);
    expect(service.balls[1].isSpare).toBe(true);
  });

  it('should be a strike', () => {
  service.getRoll(10);
  expect(service.balls[0].isStrike).toBe(true);
  });
});
