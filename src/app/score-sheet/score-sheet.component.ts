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

  constructor(private calculator: CalculatorService) {
  }

  ngOnInit() {
  }

}
