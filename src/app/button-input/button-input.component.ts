import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-button-input',
  templateUrl: './button-input.component.html',
  styleUrls: ['./button-input.component.scss']
})
export class ButtonInputComponent implements OnInit {


  constructor(private calculator: CalculatorService) {

  }

  sendScore(value) {
    this.calculator.getRoll(value);
  }

  ngOnInit() {
  }

}
