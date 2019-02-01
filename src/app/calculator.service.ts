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
  maxFrameScore: number;
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
    if (frame.ballOne.roll + frame.ballTwo.roll === 10) {
      frame.isSpare = true;
    }

    if (this.currentFrameIndex === 10) {
      frame.lastFrame = true;
      console.log('last frame');
    }

    if (frame.lastFrame && frame.isStrike || frame.lastFrame  && frame.isSpare) {
      frame.ballThree = ball;
    }
    this.balls.push(ball);

  }
  getScore() {
    this.maxFrameScore = 30;
    for (let i = 0; i < this.balls.length; i++) {
      const rolls = this.balls[i];
      const nextRoll = this.balls[i + 1];
      const nextNextRoll = this.balls[i + 2];
      const frame = rolls.frame;

      console.log(rolls);
    //   if(rolls)
    }
    // TODO 
    // if strike get two next rolls
    // 
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
        score: 0,
        isStrike: false,
        isSpare: false,
        lastFrame: false
      });
    }
  }

  getFrames() {
    return this.frames;
  }
}
