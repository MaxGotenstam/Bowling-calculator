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
    const buttons = {buttons: Number};
    const ball = { roll: roll, frame: frame, isStrike: false, isSpare: false };
    const previousBall = this.balls[this.balls.indexOf(ball) - 1];
    const score = {score: 0};

    if (!frame.ballOne.roll) {
      frame.ballOne = ball;
      if (ball.roll < 10) {

      }
      if (ball.roll === 10) {
        ball.isStrike = true;
        this.currentFrameIndex++;
      }
    } else {
      frame.ballTwo = ball;
      this.currentFrameIndex++;
    }
    if (frame.ballOne.roll + frame.ballTwo.roll === 10) {
      ball.isSpare = true;
    }
    if (frame.ballOne.roll + frame.ballTwo.roll < 10) {

    }

    if (this.currentFrameIndex === 10) {
      frame.lastFrame = true;
      console.log('last frame');
    }

    if (frame.lastFrame && ball.isStrike || frame.lastFrame && ball.isSpare) {
      frame.ballThree = ball;
    }
    this.balls.push(ball);
    this.getScore();

  }
  getScore() {
    this.maxFrameScore = 30;
    let currentScore = 0;
    console.log(this.balls);
    for (let i = 0; i < this.balls.length; i++) {
      const thisRoll = this.balls[i].roll;
      const nextRoll = this.balls[i + 1].roll;
      const nextNextRoll = this.balls[i + 2].roll;
      const frame = this.balls;
      const nextTwoRolls = nextRoll + nextNextRoll;

      if (thisRoll === 10) {
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
        // this.frameScore = thisRoll;
        // currentScore = currentScore + this.frameScore;
        console.log(this.frameScore);
      }
      console.log(currentScore);
    }
    return this.balls;
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
        lastFrame: false,
        buttons: frameAmount,
      });
    }
  }

  getFrames() {
    return this.frames;
  }
}
