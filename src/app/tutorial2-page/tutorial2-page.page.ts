import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial2-page',
  templateUrl: './tutorial2-page.page.html',
  styleUrls: ['./tutorial2-page.page.scss'],
})
export class Tutorial2PagePage  {

  currentStep: number = 1;   // Overall tutorial step
  exampleStep: number = 1;    // Step-by-step breakdown of the example

  // Method to proceed to the next overall tutorial step
  nextStep() {
    this.currentStep += 1;
    this.exampleStep = 1;     // Reset example step when moving to a new tutorial step
  }

  // Method to proceed to the next part of the example
  nextExampleStep() {
    if (this.exampleStep < 4) {
      this.exampleStep += 1;
    } else {
      this.nextStep();        // Move to the next overall step after completing the example
    }
  }
}