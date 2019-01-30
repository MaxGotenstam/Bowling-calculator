import { Injectable } from '@angular/core';
import { Frames } from './models';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  ball: number[] = [];
  frame: Frames[];
  currentScore: number;
  maxScore: number;
  value1: number;
  value2: number;
  scores: number[] = [];

  constructor() {}
  
  frames(frame: Frames){
    for(var i = 0; i <10;){
      this.frame.push()
    }
  }

  getValues(roll: number) {
    if (this.ball.length < 21) {
      this.ball.push(roll);
      // console.log(this.ball);
      
      // for(var i = 0; i < this.frames.length;){
       
      // }
      if (roll === 10) {
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
