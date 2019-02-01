export interface Frames {
  frameId?: number;
  ballOne?: Ball;
  ballTwo?: Ball;
  ballThree?: Ball;
  score?: number;
  isStrike?: boolean;
  isSpare?: boolean;
  lastFrame: boolean;
}

export interface Ball {
  roll: number;
  frame: Frames;
}
