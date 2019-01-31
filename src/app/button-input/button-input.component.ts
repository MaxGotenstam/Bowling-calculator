import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-button-input',
  templateUrl: './button-input.component.html',
  styleUrls: ['./button-input.component.scss']
})
export class ButtonInputComponent implements OnInit {
  inputBtn: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  pins: number;

  constructor(private calculator: CalculatorService) {}

  getScore(value) {
    this.pins = value;
    this.calculator.getValues(value);
    console.log(this.pins);
  }

  ngOnInit() {}
}
