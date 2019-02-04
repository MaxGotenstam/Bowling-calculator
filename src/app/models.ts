export interface Frames {
  frameId?: number;
  ballOne?: Ball;
  ballTwo?: Ball;
  ballThree?: Ball;
  score?: number;
  isStrike?: boolean;
  isSpare?: boolean;
  lastFrame?: boolean;
  buttons?: number;
}

export interface Ball {
  roll: number;
  frame: Frames;
  isStrike?: boolean;
  isSpare?: boolean;
}
