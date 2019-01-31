import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { Frames } from '../models';


@Component({
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.scss']
})
export class ScoreSheetComponent implements OnInit {
  // @Output() select = new EventEmitter<Frames>();

  // frames: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  frames: Frames[];
  frameAmount = 0;
  constructor(private calculator: CalculatorService) {
    console.log(calculator.getFrames());
  }

  foo(): void {
    this.calculator.roll(10);

  }

  getRoll(roll: number) {

  }
  getFrames() {
    // if (this.frameAmount < 10) {
    //   this.frames.push({ frameId: this.frameAmount });
    //   ++this.frameAmount;
    //   return this.frames;
    // }
    // console.log(this.frameAmount);
  }

  ngOnInit() {
    this.calculator.getFrames();
  }

}
