import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-sheet',
  templateUrl: './score-sheet.component.html',
  styleUrls: ['./score-sheet.component.scss']
})
export class ScoreSheetComponent implements OnInit {

  ball = new Array<number>(21);
  frames = new Array<number>(10);

  constructor() { }

  ngOnInit() {
  }

}
