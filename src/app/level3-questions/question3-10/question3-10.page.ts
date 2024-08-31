import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-question3-10',
  templateUrl: './question3-10.page.html',
  styleUrls: ['./question3-10.page.scss'],
})
export class Question310Page implements OnInit {

  lcd1: string = 'y';
  lcd2: string = 'z';
  lcd3: string = 'y';
  lcd4: string = 'z';
  lcd5: string = ''; // New LCD input

  ans1: string = '4';
  ans2: string = 'y';
  ans3: string = '2';
  ans4: string = 'z';
  ans5: string = '4';
  ans6: string = 'y';
  ans7: string = 'y';
  ans8: string = 'z';

  ans9: string = 'y';
  ans10: string = '2';
  ans11: string = 'z';
  ans12: string = 'y';
  ans13: string = 'y';
  ans14: string = 'y';
  ans15: string = 'z';

  ans16: string = 'y';
  ans17: string = '2';
  ans18: string = 'z';
  ans19: string = 'y';
  ans20: string = 'y';
  ans21: string = 'y';
  ans22: string = 'z';

  ans23: string = 'y';
  ans24: string = '2';
  ans25: string = 'z';
  ans26: string = 'y';
  ans27: string = 'z';
  ans28: string = 'y';
  ans29: string = 'y';
  ans30: string = 'z';
  ans31: string = 'y';
  ans32: string = 'y';
  ans33: string = 'y';
  ans34: string = 'z';

  ans35: string = 'y';
  ans36: string = 'z';
  ans37: string = 'y';
  ans38: string = 'z';
  ans39: string = 'y';
  ans40: string = 'y';
  ans41: string = 'z';
  ans42: string = 'y';
  ans43: string = 'y';
  ans44: string = 'z';

  ans45: string = 'y';
  ans46: string = 'z';
  ans47: string = 'y';
  ans48: string = 'z';
  ans49: string = 'y';
  ans50: string = 'z';
  ans51: string = 'y';
  ans52: string = 'z';

  ans53: string = 'y';
  ans54: string = '3';
  ans55: string = 'z';
  ans56: string = '3';
  ans57: string = 'z';
  ans58: string = 'y';
  ans59: string = 'z';
  ans60: string = 'y';
  ans61: string = 'z';
  ans62: string = 'y';
  ans63: string = 'z';

  ans64: string = 'y';
  ans65: string = '3';
  ans66: string = '3';
  ans67: string = 'z';
  ans68: string = 'y';
  ans69: string = 'y';
  ans70: string = 'z';

  ans71: string = 'y';
  ans72: string = '2';
  ans73: string = '3';
  ans74: string = 'z';
  ans75: string = 'y';
  ans76: string = 'z';

  constructor(private alertController: AlertController, private router: Router, private scoreService: ScoreService) {}

  ngOnInit() {}

  async checkAnswers() {
    // Define the correct answers
    const correctAnswers = {
      lcd1: 'y',
      lcd2: 'z',
      lcd3: 'y',
      lcd4: 'z',
      lcd5: '', // Update this as needed

      ans1: '4',
      ans2: 'y',
      ans3: '2',
      ans4: 'z',
      ans5: '4',
      ans6: 'y',
      ans7: 'y',
      ans8: 'z',

      ans9: 'y',
      ans10: '2',
      ans11: 'z',
      ans12: 'y',
      ans13: 'y',
      ans14: 'y',
      ans15: 'z',

      ans16: 'y',
      ans17: '2',
      ans18: 'z',
      ans19: 'y',
      ans20: 'y',
      ans21: 'y',
      ans22: 'z',

      ans23: 'y',
      ans24: '2',
      ans25: 'z',
      ans26: 'y',
      ans27: 'z',
      ans28: 'y',
      ans29: 'y',
      ans30: 'z',
      ans31: 'y',
      ans32: 'y',
      ans33: 'y',
      ans34: 'z',

      ans35: 'y',
      ans36: 'z',
      ans37: 'y',
      ans38: 'z',
      ans39: 'y',
      ans40: 'y',
      ans41: 'z',
      ans42: 'y',
      ans43: 'y',
      ans44: 'z',

      ans45: 'y',
      ans46: 'z',
      ans47: 'y',
      ans48: 'z',
      ans49: 'y',
      ans50: 'z',
      ans51: 'y',
      ans52: 'z',

      ans53: 'y',
      ans54: '3',
      ans55: 'z',
      ans56: '3',
      ans57: 'z',
      ans58: 'y',
      ans59: 'z',
      ans60: 'y',
      ans61: 'z',
      ans62: 'y',
      ans63: 'z',

      ans64: 'y',
      ans65: '3',
      ans66: '3',
      ans67: 'z',
      ans68: 'y',
      ans69: 'y',
      ans70: 'z',

      ans71: 'y',
      ans72: '2',
      ans73: '3',
      ans74: 'z',
      ans75: 'y',
      ans76: 'z'
    };

    // Check if all answers are correct
    let score = 0;
    score += this.lcd1 === correctAnswers.lcd1 ? 1 : 0;
    score += this.lcd2 === correctAnswers.lcd2 ? 1 : 0;
    score += this.lcd3 === correctAnswers.lcd3 ? 1 : 0;
    score += this.lcd4 === correctAnswers.lcd4 ? 1 : 0;
    score += this.lcd5 === correctAnswers.lcd5 ? 1 : 0;
    score += this.ans1 === correctAnswers.ans1 ? 1 : 0;
    score += this.ans2 === correctAnswers.ans2 ? 1 : 0;
    score += this.ans3 === correctAnswers.ans3 ? 1 : 0;
    score += this.ans4 === correctAnswers.ans4 ? 1 : 0;
    score += this.ans5 === correctAnswers.ans5 ? 1 : 0;
    score += this.ans6 === correctAnswers.ans6 ? 1 : 0;
    score += this.ans7 === correctAnswers.ans7 ? 1 : 0;
    score += this.ans8 === correctAnswers.ans8 ? 1 : 0;
    score += this.ans9 === correctAnswers.ans9 ? 1 : 0;
    score += this.ans10 === correctAnswers.ans10 ? 1 : 0;
    score += this.ans11 === correctAnswers.ans11 ? 1 : 0;
    score += this.ans12 === correctAnswers.ans12 ? 1 : 0;
    score += this.ans13 === correctAnswers.ans13 ? 1 : 0;
    score += this.ans14 === correctAnswers.ans14 ? 1 : 0;
    score += this.ans15 === correctAnswers.ans15 ? 1 : 0;
    score += this.ans16 === correctAnswers.ans16 ? 1 : 0;
    score += this.ans17 === correctAnswers.ans17 ? 1 : 0;
    score += this.ans18 === correctAnswers.ans18 ? 1 : 0;
    score += this.ans19 === correctAnswers.ans19 ? 1 : 0;
    score += this.ans20 === correctAnswers.ans20 ? 1 : 0;
    score += this.ans21 === correctAnswers.ans21 ? 1 : 0;
    score += this.ans22 === correctAnswers.ans22 ? 1 : 0;
    score += this.ans23 === correctAnswers.ans23 ? 1 : 0;
    score += this.ans24 === correctAnswers.ans24 ? 1 : 0;
    score += this.ans25 === correctAnswers.ans25 ? 1 : 0;
    score += this.ans26 === correctAnswers.ans26 ? 1 : 0;
    score += this.ans27 === correctAnswers.ans27 ? 1 : 0;
    score += this.ans28 === correctAnswers.ans28 ? 1 : 0;
    score += this.ans29 === correctAnswers.ans29 ? 1 : 0;
    score += this.ans30 === correctAnswers.ans30 ? 1 : 0;
    score += this.ans31 === correctAnswers.ans31 ? 1 : 0;
    score += this.ans32 === correctAnswers.ans32 ? 1 : 0;
    score += this.ans33 === correctAnswers.ans33 ? 1 : 0;
    score += this.ans34 === correctAnswers.ans34 ? 1 : 0;
    score += this.ans35 === correctAnswers.ans35 ? 1 : 0;
    score += this.ans36 === correctAnswers.ans36 ? 1 : 0;
    score += this.ans37 === correctAnswers.ans37 ? 1 : 0;
    score += this.ans38 === correctAnswers.ans38 ? 1 : 0;
    score += this.ans39 === correctAnswers.ans39 ? 1 : 0;
    score += this.ans40 === correctAnswers.ans40 ? 1 : 0;
    score += this.ans41 === correctAnswers.ans41 ? 1 : 0;
    score += this.ans42 === correctAnswers.ans42 ? 1 : 0;
    score += this.ans43 === correctAnswers.ans43 ? 1 : 0;
    score += this.ans44 === correctAnswers.ans44 ? 1 : 0;
    score += this.ans45 === correctAnswers.ans45 ? 1 : 0;
    score += this.ans46 === correctAnswers.ans46 ? 1 : 0;
    score += this.ans47 === correctAnswers.ans47 ? 1 : 0;
    score += this.ans48 === correctAnswers.ans48 ? 1 : 0;
    score += this.ans49 === correctAnswers.ans49 ? 1 : 0;
    score += this.ans50 === correctAnswers.ans50 ? 1 : 0;
    score += this.ans51 === correctAnswers.ans51 ? 1 : 0;
    score += this.ans52 === correctAnswers.ans52 ? 1 : 0;
    score += this.ans53 === correctAnswers.ans53 ? 1 : 0;
    score += this.ans54 === correctAnswers.ans54 ? 1 : 0;
    score += this.ans55 === correctAnswers.ans55 ? 1 : 0;
    score += this.ans56 === correctAnswers.ans56 ? 1 : 0;
    score += this.ans57 === correctAnswers.ans57 ? 1 : 0;
    score += this.ans58 === correctAnswers.ans58 ? 1 : 0;
    score += this.ans59 === correctAnswers.ans59 ? 1 : 0;
    score += this.ans60 === correctAnswers.ans60 ? 1 : 0;
    score += this.ans61 === correctAnswers.ans61 ? 1 : 0;
    score += this.ans62 === correctAnswers.ans62 ? 1 : 0;
    score += this.ans63 === correctAnswers.ans63 ? 1 : 0;
    score += this.ans64 === correctAnswers.ans64 ? 1 : 0;
    score += this.ans65 === correctAnswers.ans65 ? 1 : 0;
    score += this.ans66 === correctAnswers.ans66 ? 1 : 0;
    score += this.ans67 === correctAnswers.ans67 ? 1 : 0;
    score += this.ans68 === correctAnswers.ans68 ? 1 : 0;
    score += this.ans69 === correctAnswers.ans69 ? 1 : 0;
    score += this.ans70 === correctAnswers.ans70 ? 1 : 0;
    score += this.ans71 === correctAnswers.ans71 ? 1 : 0;
    score += this.ans72 === correctAnswers.ans72 ? 1 : 0;
    score += this.ans73 === correctAnswers.ans73 ? 1 : 0;
    score += this.ans74 === correctAnswers.ans74 ? 1 : 0;
    score += this.ans75 === correctAnswers.ans75 ? 1 : 0;
    score += this.ans76 === correctAnswers.ans76 ? 1 : 0;

      const resultMessage = score === Object.keys(correctAnswers).length ? 'Correct!' : 'Incorrect. Please try again.';

      if (score > 0) {
        this.scoreService.addScore(score); // Add score if at least one answer is correct
      }

    const alert = await this.alertController.create({
      header: 'Result',
      message: resultMessage,
      buttons: [
        {
          text: 'Next',
          handler: () => {
             if (score === Object.keys(correctAnswers).length) {
              this.router.navigate(['/final-score']); // Navigate to the next page if the answer is correct
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
    this.ans68 = '';
    this.ans69 = '';
    this.ans70 = '';
    this.ans71 = '';
    this.ans72 = '';
    this.ans73 = '';
    this.ans74 = '';
    this.ans75 = '';
    this.ans76 = '';
  }

}
