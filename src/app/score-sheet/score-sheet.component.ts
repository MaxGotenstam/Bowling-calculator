import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { Frames } from '../models';


@Component({
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.scss']
})
export class ScoreSheetComponent implements OnInit {
  frames: Frames[];

  constructor(private calculator: CalculatorService) {
  }

  ngOnInit() {
  }

}
