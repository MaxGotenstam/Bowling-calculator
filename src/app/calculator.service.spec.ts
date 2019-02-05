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

  it('should be perfect score', () => {
    console.log(service);
    for (let i = 0; i < 10; i++) {
      service.getRoll(10);
    }
    expect(service.frames[9].score).toBe(300);
  });

  it('should be spare', () => {
    service.getRoll(1);
    service.getRoll(9);
    expect(service.balls[1].isSpare).toBe(true);
  });

  it('should be a strike', () => {
  service.getRoll(10);
  expect(service.balls[0].isStrike).toBe(true);
  });
});
