import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tutorial1popup',
  templateUrl: './tutorial1popup.component.html',
  styleUrls: ['./tutorial1popup.component.scss'],
})
export class Tutorial1popupComponent {
  @Output() closeTutorial = new EventEmitter<void>();
  currentStep: number = 0;
  showPopup: boolean = true;
 


  nextStep() {
    if (this.currentStep < 14) {
      this.currentStep++;
    } else {
      this.showPopup = false; 
    }
  }
  closePopup() {
    this.closeTutorial.emit();
  }
}