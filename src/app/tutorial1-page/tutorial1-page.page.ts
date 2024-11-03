import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial1-page',
  templateUrl: './tutorial1-page.page.html',
  styleUrls: ['./tutorial1-page.page.scss'],
})
export class Tutorial1PagePage {
  currentStep: number = 1;
  exampleStep: number = 1;


  nextStep() {
    this.currentStep += 1;
    this.exampleStep = 1;
  }

  nextExampleStep() {
    if (this.exampleStep < 4) {
      this.exampleStep += 1;
    } else {
      this.nextStep();
    }
  }
}
