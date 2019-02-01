import { Injectable } from '@angular/core';
import { Frames, Ball } from './models';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  balls: Ball[] = [];
  frames: Frames[] = [];
  currentFrameIndex: number;
  // frames: Frames;
  currentScore: number;
  maxScore: number;
  // scores: number[] = [];
  pins = 10;
  // isOdd = false;

  constructor() {
    this.initFrames();
    // console.log(this.frames);
    this.currentFrameIndex = 0;
  }

  getRoll(roll: number) {
    const frame = this.frames[this.currentFrameIndex];
    const ball = { roll: roll, frame: frame };
    const previousBall = this.balls[this.balls.indexOf(ball) - 1];

    if (!frame.ballOne.roll) {
      frame.ballOne = ball;
      if (ball.roll === 10) {
        frame.isStrike = true;
        this.currentFrameIndex++;
      }
    } else {
      frame.ballTwo = ball;
      this.currentFrameIndex++;
    }

    if (this.currentFrameIndex === 10) {
      frame.lastFrame = true;
      console.log('last frame');
    }

    this.balls.push(ball);

    // console.log(ball);
    // if (this.ball.length < 21) {
    //   lastRoll = roll;
    //   if (lastRoll === 10) {
    //     this.ball.push({  isStrike: true });
    //     console.log("strike");
    //   } else {
    //     this.ball.push({  });
    //   }
    //   // this.ball.push({ rolls: roll });
    //   console.log(this.ball);
    //   console.log(previousRoll + "ö");
    // }
    // console.log(lastRoll);
    // for (let i = 0; i < this.ball.length; ) {
    //   if (this.ball.length - (1 % 2) === 0) {
    //     console.log("even");
    //   } else {
    //     //this.isOdd = true;
    //     console.log("odd");
    //   }
    //   i++;
    // }

    // if (this.isOdd === true) {
    //   console.log(lastRoll + "förra");
    //   console.log(previousRoll + "förrförra");
    //   if (previousRoll + lastRoll === 10) {
    //     console.log("spare");
    //   }
    // }
  }

  getScore() { }

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
    const temp = { roll: undefined, frame: undefined };
    for (frameAmount = 1; frameAmount <= 10; frameAmount++) {
      this.frames.push({
        frameId: frameAmount,
        ballOne: temp,
        ballTwo: temp,
        ballThree: temp,
        score: undefined,
        isStrike: false,
        isSpare: false,
        lastFrame: false
      });
    }
    this.frames.forEach(frame => {
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
    return this.frames;
  }
  // getRolls() {
  //   return this.ball;
  // }
  sendValues() { }
  roll(num: number) {
    if (num === 10) {
      console.log('STRIKE!!');
    }
  }
}
