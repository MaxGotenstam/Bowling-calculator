import { Injectable } from '@angular/core';
import { Frames } from './models';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  ball: number[] = [];
  frames: Frames[];
  currentScore: number;
  maxScore: number;
  value1: number;
  value2: number;
  scores: number[] = [];
  isStrike: boolean;
  isSpare: boolean;
  frameAmount: number;
  placeholderFrames: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() {

  }

  getValues(roll: number) {
    if (this.ball.length < 21) {
      this.ball.push(roll);
      console.log(this.ball);
    }
    this.placeholderFrames.forEach(frame => {
      console.log(frame);
    });
    const lastRoll = this.ball[this.ball.length - 2];
    if (roll === 10) {
      this.isStrike = true;
      console.log('Strike!');
    }
    if ((lastRoll + roll) === 10) {
      this.isSpare = true;
      console.log('Spare!');
    }

  }
  getFrames() {
    for (this.frameAmount = 0; this.frameAmount < 10; this.frameAmount++) {
      this.frames.push({ frameId: this.frameAmount });
    }
  }
  sendValues() { }
  roll(num: number) {
    if (num === 10) {
      console.log('STRIKE!!!');
    }
  }
}
