import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3-8',
  templateUrl: './question3-8.page.html',
  styleUrls: ['./question3-8.page.scss'],
})
export class Question38Page implements OnInit {

  lcd1: string = '';
  lcd2: string = '';
  lcd3: string = '';
  lcd4: string = '';
  lcd5: string = ''; // Added new LCD input

  ans1: string = '';
  ans2: string = '';
  ans3: string = '';
  ans4: string = '';
  ans5: string = '';
  ans6: string = '';
  ans7: string = '';
  ans8: string = '';
  ans9: string = '';
  ans10: string = '';
  ans11: string = '';
  ans12: string = '';
  ans13: string = '';
  ans14: string = '';
  ans15: string = '';
  ans16: string = '';
  ans17: string = '';
  ans18: string = '';
  ans19: string = '';
  ans20: string = '';
  ans21: string = '';
  ans22: string = '';
  ans23: string = '';
  ans24: string = '';
  ans25: string = '';
  ans26: string = '';
  ans27: string = '';
  ans28: string = '';
  ans29: string = '';
  ans30: string = '';
  ans31: string = '';
  ans32: string = '';
  ans33: string = '';
  ans34: string = '';
  ans35: string = '';
  ans36: string = '';
  ans37: string = '';
  ans38: string = '';
  ans39: string = '';
  ans40: string = '';
  ans41: string = '';
  ans42: string = '';
  ans43: string = '';
  ans44: string = '';
  ans45: string = '';
  ans46: string = '';
  ans47: string = '';
  ans48: string = '';
  ans49: string = '';
  ans50: string = '';
  ans51: string = '';
  ans52: string = '';
  ans53: string = '';
  ans54: string = '';
  ans55: string = '';
  ans56: string = '';
  ans57: string = '';
  ans58: string = '';
  ans59: string = '';
  ans60: string = '';
  ans61: string = '';
  ans62: string = '';
  ans63: string = '';
  ans64: string = '';
  ans65: string = '';
  ans66: string = '';
  ans67: string = '';

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {}

  async checkAnswers() {
    // Define the correct answers
    const correctAnswers = {
      lcd1: 'r', lcd2: '1', // Updated LCD answers
      ans1: '2', ans2: '4', ans3: '2', ans4: '1', ans5: '2', ans6: 'r', ans7: 'r', ans8: '1', // 1st Simplify
      ans9: '4', ans10: '2', ans11: '1', ans12: '1', ans13: 'r', ans14: 'r', ans15: '1', // 2nd Simplify
      ans16: '4', ans17: '2', ans18: '1', ans19: '1', ans20: 'r', ans21: 'r', ans22: '1', ans23: 'r', ans24: '1', // 3rd Simplify
      ans25: '4', ans26: '2', ans27: '1', ans28: 'r', ans29: '1', ans30: 'r', ans31: '1', ans32: 'r', ans33: 'r', ans34: '1', // 4th Simplify
      ans35: '4', ans36: '2', ans37: 'r', ans38: '4', ans39: '2', ans40: '1', ans41: 'r', ans42: '1', ans43: 'r', ans44: 'r', ans45: '1', // 5th Simplify
      ans46: '4', ans47: '2', ans48: 'r', ans49: '1', ans50: 'r', ans51: '1', ans52: 'r', ans53: 'r', ans54: '1', // 6th Simplify
      ans55: '4', ans56: '2', ans57: 'r', ans58: '1', ans59: 'r', ans60: 'r', ans61: '1', // 7th Simplify
      ans62: '4', ans63: '2', ans64: '2', ans65: '1', ans66: 'r', ans67: '1' // Final Answer
    };

    // Check if all answers are correct
    const isCorrect =
      this.lcd1 === correctAnswers.lcd1 &&
      this.lcd2 === correctAnswers.lcd2 &&
      this.ans1 === correctAnswers.ans1 &&
      this.ans2 === correctAnswers.ans2 &&
      this.ans3 === correctAnswers.ans3 &&
      this.ans4 === correctAnswers.ans4 &&
      this.ans5 === correctAnswers.ans5 &&
      this.ans6 === correctAnswers.ans6 &&
      this.ans7 === correctAnswers.ans7 &&
      this.ans8 === correctAnswers.ans8 &&
      this.ans9 === correctAnswers.ans9 &&
      this.ans10 === correctAnswers.ans10 &&
      this.ans11 === correctAnswers.ans11 &&
      this.ans12 === correctAnswers.ans12 &&
      this.ans13 === correctAnswers.ans13 &&
      this.ans14 === correctAnswers.ans14 &&
      this.ans15 === correctAnswers.ans15 &&
      this.ans16 === correctAnswers.ans16 &&
      this.ans17 === correctAnswers.ans17 &&
      this.ans18 === correctAnswers.ans18 &&
      this.ans19 === correctAnswers.ans19 &&
      this.ans20 === correctAnswers.ans20 &&
      this.ans21 === correctAnswers.ans21 &&
      this.ans22 === correctAnswers.ans22 &&
      this.ans23 === correctAnswers.ans23 &&
      this.ans24 === correctAnswers.ans24 &&
      this.ans25 === correctAnswers.ans25 &&
      this.ans26 === correctAnswers.ans26 &&
      this.ans27 === correctAnswers.ans27 &&
      this.ans28 === correctAnswers.ans28 &&
      this.ans29 === correctAnswers.ans29 &&
      this.ans30 === correctAnswers.ans30 &&
      this.ans31 === correctAnswers.ans31 &&
      this.ans32 === correctAnswers.ans32 &&
      this.ans33 === correctAnswers.ans33 &&
      this.ans34 === correctAnswers.ans34 &&
      this.ans35 === correctAnswers.ans35 &&
      this.ans36 === correctAnswers.ans36 &&
      this.ans37 === correctAnswers.ans37 &&
      this.ans38 === correctAnswers.ans38 &&
      this.ans39 === correctAnswers.ans39 &&
      this.ans40 === correctAnswers.ans40 &&
      this.ans41 === correctAnswers.ans41 &&
      this.ans42 === correctAnswers.ans42 &&
      this.ans43 === correctAnswers.ans43 &&
      this.ans44 === correctAnswers.ans44 &&
      this.ans45 === correctAnswers.ans45 &&
      this.ans46 === correctAnswers.ans46 &&
      this.ans47 === correctAnswers.ans47 &&
      this.ans48 === correctAnswers.ans48 &&
      this.ans49 === correctAnswers.ans49 &&
      this.ans50 === correctAnswers.ans50 &&
      this.ans51 === correctAnswers.ans51 &&
      this.ans52 === correctAnswers.ans52 &&
      this.ans53 === correctAnswers.ans53 &&
      this.ans54 === correctAnswers.ans54 &&
      this.ans55 === correctAnswers.ans55 &&
      this.ans56 === correctAnswers.ans56 &&
      this.ans57 === correctAnswers.ans57 &&
      this.ans58 === correctAnswers.ans58 &&
      this.ans59 === correctAnswers.ans59 &&
      this.ans60 === correctAnswers.ans60 &&
      this.ans61 === correctAnswers.ans61 &&
      this.ans62 === correctAnswers.ans62 &&
      this.ans63 === correctAnswers.ans63 &&
      this.ans64 === correctAnswers.ans64 &&
      this.ans65 === correctAnswers.ans65 &&
      this.ans66 === correctAnswers.ans66 &&
      this.ans67 === correctAnswers.ans67;

    const resultMessage = isCorrect ? 'Correct!' : 'Incorrect. Please try again.';

    const alert = await this.alertController.create({
      header: 'Result',
      message: resultMessage,
      buttons: [
        {
          text: 'Next',
          handler: () => {
            if (isCorrect) {
              this.router.navigate(['/question3-9']); // Navigate to the next page if the answer is correct
            }
          }
        },
        {
          text: 'Try Again',
          handler: () => {
            this.resetInputs(); // Reset the input fields
          }
        }
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  resetInputs() {
    this.lcd1 = '';
    this.lcd2 = '';
    this.lcd3 = '';
    this.lcd4 = '';
    this.lcd5 = ''; // Reset new LCD input

    this.ans1 = '';
    this.ans2 = '';
    this.ans3 = '';
    this.ans4 = '';
    this.ans5 = '';
    this.ans6 = '';
    this.ans7 = '';
    this.ans8 = '';
    this.ans9 = '';
    this.ans10 = '';
    this.ans11 = '';
    this.ans12 = '';
    this.ans13 = '';
    this.ans14 = '';
    this.ans15 = '';
    this.ans16 = '';
    this.ans17 = '';
    this.ans18 = '';
    this.ans19 = '';
    this.ans20 = '';
    this.ans21 = '';
    this.ans22 = '';
    this.ans23 = '';
    this.ans24 = '';
    this.ans25 = '';
    this.ans26 = '';
    this.ans27 = '';
    this.ans28 = '';
    this.ans29 = '';
    this.ans30 = '';
    this.ans31 = '';
    this.ans32 = '';
    this.ans33 = '';
    this.ans34 = '';
    this.ans35 = '';
    this.ans36 = '';
    this.ans37 = '';
    this.ans38 = '';
    this.ans39 = '';
    this.ans40 = '';
    this.ans41 = '';
    this.ans42 = '';
    this.ans43 = '';
    this.ans44 = '';
    this.ans45 = '';
    this.ans46 = '';
    this.ans47 = '';
    this.ans48 = '';
    this.ans49 = '';
    this.ans50 = '';
    this.ans51 = '';
    this.ans52 = '';
    this.ans53 = '';
    this.ans54 = '';
    this.ans55 = '';
    this.ans56 = '';
    this.ans57 = '';
    this.ans58 = '';
    this.ans59 = '';
    this.ans60 = '';
    this.ans61 = '';
    this.ans62 = '';
    this.ans63 = '';
    this.ans64 = '';
    this.ans65 = '';
    this.ans66 = '';
    this.ans67 = '';
  }

}
 