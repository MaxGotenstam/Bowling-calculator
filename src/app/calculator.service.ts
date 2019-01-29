import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  
  getValues(num: number){
    
  }
  roll(num: number){
    if(num === 10)
      console.log("STRIKE!!!");
  }
}
