import { Injectable } from '@angular/core';
import { Frames, Ball } from './models';
import { Button } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  balls: Ball[] = [];
  frames: Frames[] = [];
  currentFrameIndex: number;
  frameScore: number;
  maxFrameScore: number;
  pins = 10;

  constructor() {
    this.initFrames();
    // console.log(this.frames);
    this.currentFrameIndex = 0;
  }

  getRoll(roll: number) {
    // const strike = false;
    const spare = false;
    const frame = this.frames[this.currentFrameIndex];
    const buttons = { buttons: Number };
    const ball = { roll: roll, frame: frame, isStrike: false, isSpare: false };
    const previousBall = this.balls[this.balls.indexOf(ball) - 1];
    const score = { score: 0 };


    if (frame.lastFrame) {

      if (!frame.ballOne.roll) {
        frame.ballOne = ball;
        if (ball.roll === 10) {
          ball.isStrike = true;
        }
      } else if (!frame.ballTwo.roll) {
        frame.ballTwo = ball;
        if (ball.roll === 10 && frame.ballOne.isStrike) {
          ball.isStrike = true;
        } else if (ball.roll + frame.ballOne.roll === 10) {
          ball.isSpare = true;
        }
      } else if (frame.ballOne.isStrike || (frame.ballTwo.isSpare || frame.ballTwo.isStrike)) {
        frame.ballThree = ball;
      }



      console.log(frame);
    } else {
      if (!frame.ballOne.roll) {
        frame.ballOne = ball;

        if (ball.roll === 10) {
          ball.isStrike = true;
          if (frame.lastFrame === false) {
            this.currentFrameIndex++;
          }
        }
      } else {
        frame.ballTwo = ball;
        if (frame.lastFrame === false) {
          this.currentFrameIndex++;
        }
      }
      if (frame.ballOne.roll + frame.ballTwo.roll === 10) {
        ball.isSpare = true;
      }
      if (this.currentFrameIndex === 10) {
        frame.lastFrame = true;
        console.log('last frame');
      }
    }

    this.balls.push(ball);
    this.getScore();

  }
  getScore() {
    this.maxFrameScore = 30;
    let currentScore = 0;
    // console.log(this.balls);
    for (let i = 0; i < this.balls.length; i++) {
      const thisBall = this.balls[i];
      const thisRoll = thisBall.roll;
      const nextRoll = this.balls[i + 1].roll;
      const nextNextRoll = this.balls[i + 2].roll;
      const frame = this.balls.indexOf(thisBall);

      if (thisRoll === 10) {
        // console.log(isNaN(nextRoll), 'nextroll');
        // console.log(isNaN(nextNextRoll), 'nextnextroll');
        // console.log(isNaN(this.frameScore), 'framescore');
        this.frameScore = 10 + nextRoll + nextNextRoll;
        currentScore = currentScore + this.frameScore;
      }
      if (thisRoll + nextRoll === 10) {
        this.frameScore = 10 + nextNextRoll;
        currentScore = currentScore + this.frameScore;
      }
      if (thisRoll + nextRoll < 10) {
        this.frameScore = thisRoll + nextRoll;
        currentScore = currentScore + this.frameScore;
      } else {
        // console.log(this.frameScore);
      }
      // console.log(isNaN(currentScore), 'currentscore');
      // console.log(currentScore);

    }
    return this.balls;
  }

  initFrames() {
    let frameAmount;
    const temp = { roll: undefined, frame: undefined };
    for (frameAmount = 1; frameAmount <= 10; frameAmount++) {
      this.frames.push({
        frameId: frameAmount,
        ballOne: temp,
        ballTwo: temp,
        ballThree: temp,
        score: 0,
        lastFrame: frameAmount === 10,
        buttons: frameAmount,
      });
    }
  }

  getFrames() {
    return this.frames;
  }
}
