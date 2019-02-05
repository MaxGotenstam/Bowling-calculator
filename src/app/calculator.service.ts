import { Injectable } from '@angular/core';
import { Frames, Ball } from './models';
import { Button } from 'protractor';
import { isNumber } from 'util';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  balls: Ball[] = [];
  frames: Frames[] = [];
  currentFrameIndex: number;
  frameScore: number;
  maxFrameScore: number;

  constructor() {
    this.initFrames();
    // console.log(this.frames);
    this.currentFrameIndex = 0;
  }

  // ToDo:
  // fix so you can't make the value of ballOne and ballTwo exceed 10
  // make it so you can't continue rolling balls after the last frame
  // fix the styling of the frames

  getRoll(roll: number) {
    const frame = this.frames[this.currentFrameIndex];
    const ball = { roll: roll, frame: frame, isStrike: false, isSpare: false };

    if (frame.lastFrame) {
      if (!frame.ballOne.roll && frame.ballOne.roll !== 0) {
        frame.ballOne = ball;
        if (frame.ballOne.roll === 10) {
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
        if (ball.roll === 10 && (frame.ballTwo.isSpare || frame.ballTwo.isStrike)) {
          ball.isStrike = true;
        } else if (!frame.ballTwo.isStrike && (ball.roll + frame.ballTwo.roll === 10)) {
          ball.isSpare = true;
        } else if (frame.ballThree.roll) {

        }
      }
      // console.log(frame);
    } else {
      if (!frame.ballOne.roll && frame.ballOne.roll !== 0) {

        frame.ballOne = ball;
        if (ball.roll === 10) {
          ball.isStrike = true;
          this.currentFrameIndex++;
        }

      } else {
        frame.ballTwo = ball;
        this.currentFrameIndex++;
      }
      if (ball.roll + frame.ballOne.roll === 10) {
        ball.isSpare = true;
      }

      if (this.currentFrameIndex === 10) {
        frame.lastFrame = true;
        // console.log('last frame');
      }
    }
    this.balls.push(ball);
    this.getScore();
  }
  getScore() {
    for (let i = 0; i < this.balls.length; i++) {
      const thisBall = this.balls[i];
      const nextBall = this.balls[i + 1];
      const nextNextBall = this.balls[i + 2];
      const frame = thisBall.frame;
      const lastFrame = this.balls[i - 1];
      let tempScore = 0;

      if (thisBall.isStrike && nextBall && nextNextBall) {
        tempScore += thisBall.roll + nextBall.roll + nextNextBall.roll;
      } else if (thisBall.isSpare && nextBall) {
        tempScore += frame.ballOne.roll + thisBall.roll + nextBall.roll;
      } else {
        tempScore += frame.ballOne.roll + frame.ballTwo.roll;
      }
      frame.score = tempScore;
      // if lastframe have points
      // add lastframe to frame.score
      if (lastFrame) {
        frame.score += lastFrame;
      }

    }
  }

  initFrames() {
    let frameAmount: number;
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
