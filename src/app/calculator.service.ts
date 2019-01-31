import { Injectable } from '@angular/core';
import { Frames } from './models';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  ball: Frames[] = [];
  frame: Frames[] = [];
  // frames: Frames;
  currentScore: number;
  maxScore: number;
  scores: number[] = [];
  isStrike: boolean;
  isSpare: boolean;
  pins = 10;
  // frameAmount: number;
  firstBall = false;
  secondBall = false;
  isOdd = false;

  constructor() {
    this.initFrames();
    console.log(this.frame);
  }

  getRoll(roll: number) {
    let lastRoll;
    const previousRoll = this.ball.slice(-2)[0];

    if (this.ball.length < 21) {
      lastRoll = roll;
      if (lastRoll === 10) {
        this.ball.push({ rolls: lastRoll, isStrike: true });
        console.log('strike');
      } else {
        this.ball.push({ rolls: lastRoll });
      }
      // this.ball.push({ rolls: roll });
      console.log(this.ball);
      console.log(previousRoll + 'ö');
    }
    console.log(lastRoll);
    for (let i = 0; i < this.ball.length;) {
      if (this.ball.length - 1 % 2 === 0) {
        console.log('even');
      } else {
        this.isOdd = true;
        console.log('odd');
      }
      i++;
    }

    if (this.isOdd === true) {
      console.log(lastRoll + 'förra');
      console.log(previousRoll + 'förrförra');
      if ((previousRoll + lastRoll) === 10) {
        console.log('spare');
      }
    }
  }

  getScore() {


  }

  splitRolls() {
    // tslint:disable-next-line:no-shadowed-variable
    // const pairs = [];
    // for (let i = 0; i < this.ball.length; i += 2) {
    //   if (this.ball[i + 1] !== undefined) {
    //     pairs.push([this.ball[i], this.ball[i + 1]]);
    //   } else {
    //     pairs.push([this.ball[i]]);
    //   }
    // }
    // console.log(this.ball);
    // return pairs;

    // for (let i = 0; i < this.ball.length; i += 2) {
    //   pairs.push(this.ball.slice(i, i + 2));
    // }
    // console.log(this.ball);
    // return pairs;

  }

  getValues(roll: number) {
    // if (this.ball.length < 21) {
    //   this.ball.push(roll);
    //   console.log(this.ball);
    // }


    // const lastRoll = this.ball[this.ball.length - 2];
    // if (roll === 10) {
    //   this.isStrike = true;
    //   console.log("Strike!");
    // }
    // if (lastRoll + roll === 10) {
    //   this.isSpare = true;
    //   console.log("Spare!");
    // }
  }
  private initFrames() {
    let frameAmount;
    for (frameAmount = 1; frameAmount <= 10; frameAmount++) {
      this.frame.push({ frameId: frameAmount });
    }
    this.frame.forEach(frame => {
      // this.frameNumber = frame.frameId;
      // this.getRoll(this.frameNumber);
      // console.log(this.frameNumber);
    });
    this.splitRolls();
    // let thisFrame = this.frames.frameId;
    // for (thisFrame = 0; thisFrame <= 10;) {
    //   thisFrame++;
    // }
  }

  getFrames() {
    return this.frame;
  }
  getRolls() {
    return this.ball;
  }
  sendValues() { }
  roll(num: number) {
    if (num === 10) {
      console.log('STRIKE!!');
    }
  }
}
