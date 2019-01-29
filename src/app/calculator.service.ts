import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  balls: number[] = [];
  currentScore: number;
  maxScore: number;
  constructor() { }

  getValues(roll: number) {
    if (this.balls.length < 21) {
      this.balls.push(roll);
      console.log(this.balls);

      if (this.balls[1] === 10) {
        console.log('Strike!');
      }
    }
  }
  sendValues() { }
  roll(num: number) {
    if (num === 10) {
      console.log('STRIKE!!!');
    }
  }
}
