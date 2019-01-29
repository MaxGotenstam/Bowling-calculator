import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.scss']
})
export class ScoreSheetComponent implements OnInit {

  // frames = new Array<number>(10);
  frames: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor(private calculator: CalculatorService) { }

  foo(): void{
    this.calculator.roll(10)

  }
  ngOnInit() {
    
  }

}
