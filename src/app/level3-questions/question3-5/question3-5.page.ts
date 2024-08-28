import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3-5',
  templateUrl: './question3-5.page.html',
  styleUrls: ['./question3-5.page.scss'],
})
export class Question35Page implements OnInit {

  lcd1: string = '';
  lcd2: string = '';
  lcd3: string = '';
  lcd4: string = ''; // Added new LCD input

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
  ans68: string = '';
  ans69: string = '';
  ans70: string = '';
  ans71: string = '';
  ans72: string = '';
  ans73: string = '';
  ans74: string = '';
  ans75: string = '';
  ans76: string = '';
  ans77: string = '';

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {}

  async checkAnswers() {
    // Define the correct answers
    const correctAnswers = {
      lcd1: 'c', lcd2: '1', lcd3: 'c', lcd4: '3', // LCD answers

      ans1: 'c', ans2: '2', ans3: 'c', ans4: '1', ans5: 'c', ans6: '1', ans7: 'c', ans8: '2', ans9: 'c', ans10: '3', // 1st Simplify
      ans11: 'c', ans12: '2', ans13: 'c', ans14: '1', ans15: 'c', ans16: '2', ans17: 'c', ans18: '3', // 2nd Simplify
      ans19: 'c', ans20: '2', ans21: 'c', ans22: '1', ans23: 'c', ans24: '2', ans25: 'c', ans26: '3', ans27: 'c', ans28: '1', ans29: 'c', ans30: '3', // 3rd Simplify
      ans31: 'c', ans32: '2', ans33: 'c', ans34: '3', ans35: 'c', ans36: '1', ans37: 'c', ans38: '3', ans39: 'c', ans40: '2', ans41: 'c', ans42: '1', // 4th Simplify
      ans43: 'c', ans44: '3', ans45: 'c', ans46: '1', // 4th Simplify continued
      ans47: 'c', ans48: '5', ans49: '6', ans50: 'c', ans51: '1', ans52: 'c', ans53: '3', ans54: 'c', ans55: '3', ans56: '2', ans57: 'c', ans58: '1', ans59: 'c', ans60: '3', // 5th Simplify
      ans61: 'c', ans62: '5', ans63: '6', ans64: 'c', ans65: '3', ans66: '2', ans67: 'c', ans68: '1', ans69: 'c', ans70: '3', // 6th Simplify
      ans71: '2', ans72: '8', ans73: '8', ans74: 'c', ans75: '1', ans76: 'c', ans77: '3' // Final Answer
    };

    // Check if all answers are correct
    const isCorrect =
      this.lcd1 === correctAnswers.lcd1 &&
      this.lcd2 === correctAnswers.lcd2 &&
      this.lcd3 === correctAnswers.lcd3 &&
      this.lcd4 === correctAnswers.lcd4 && // Check new LCD input
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
      this.ans67 === correctAnswers.ans67 &&
      this.ans68 === correctAnswers.ans68 &&
      this.ans69 === correctAnswers.ans69 &&
      this.ans70 === correctAnswers.ans70 &&
      this.ans71 === correctAnswers.ans71 &&
      this.ans72 === correctAnswers.ans72 &&
      this.ans73 === correctAnswers.ans73 &&
      this.ans74 === correctAnswers.ans74 &&
      this.ans75 === correctAnswers.ans75 &&
      this.ans76 === correctAnswers.ans76 &&
      this.ans77 === correctAnswers.ans77;

    const resultMessage = isCorrect ? 'Correct!' : 'Incorrect. Please try again.';

    const alert = await this.alertController.create({
      header: 'Result',
      message: resultMessage,
      buttons: [
        {
          text: 'Next',
          handler: () => {
            if (isCorrect) {
              this.router.navigate(['/question3-6']); // Navigate to the next page if the answer is correct
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
    this.lcd4 = ''; // Reset new LCD input

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
    this.ans42 = ''; // Reset new answers
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
    this.ans68 = '';
    this.ans69 = '';
    this.ans70 = '';
    this.ans71 = '';
    this.ans72 = '';
    this.ans73 = '';
    this.ans74 = '';
    this.ans75 = '';
    this.ans76 = '';
    this.ans77 = '';
  }

}
