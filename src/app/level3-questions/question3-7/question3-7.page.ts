import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3-7',
  templateUrl: './question3-7.page.html',
  styleUrls: ['./question3-7.page.scss'],
})
export class Question37Page implements OnInit {

  lcd1: string = 'r'; // Updated LCD input

  ans1: string = 'r'; // 1st Simplify
  ans2: string = '1';
  ans3: string = 'r';
  ans4: string = 'r';
  ans5: string = '1';
  ans6: string = 'r';
  ans7: string = '1';
  ans8: string = 'r';
  ans9: string = '1';
  ans10: string = 'r';

  ans11: string = 'r'; // 2nd Simplify
  ans12: string = 'r';
  ans13: string = '1';
  ans14: string = '1';
  ans15: string = 'r';
  ans16: string = '1';
  ans17: string = 'r';

  ans18: string = 'r'; // 3rd Simplify
  ans19: string = 'r';
  ans20: string = '1';
  ans21: string = '1';
  ans22: string = 'r';
  ans23: string = '1';
  ans24: string = 'r';
  ans25: string = 'r';

  ans26: string = 'r'; // 4th Simplify
  ans27: string = 'r';
  ans28: string = 'r';
  ans29: string = '1';
  ans30: string = 'r';
  ans31: string = 'r';
  ans32: string = '1';
  ans33: string = 'r';

  ans34: string = 'r'; // 5th Simplify
  ans35: string = 'r';
  ans36: string = 'r';
  ans37: string = 'r';
  ans38: string = 'r';
  ans39: string = '1';
  ans40: string = 'r';

  ans41: string = 'r'; // 6th Simplify
  ans42: string = 'r';
  ans43: string = 'r';
  ans44: string = 'r';
  ans45: string = '1';
  ans46: string = 'r';

  ans47: string = 'r'; // Final Answer
  ans48: string = 'r';
  ans49: string = '1';
  ans50: string = 'r';

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {}

  async checkAnswers() {
    // Define the correct answers
    const correctAnswers = {
      lcd1: 'r', // LCD answers

      ans1: 'r', ans2: '1', ans3: 'r', ans4: 'r', ans5: '1', ans6: 'r', ans7: '1', ans8: 'r', ans9: '1', ans10: 'r', // 1st Simplify
      ans11: 'r', ans12: 'r', ans13: '1', ans14: '1', ans15: 'r', ans16: '1', ans17: 'r', // 2nd Simplify
      ans18: 'r', ans19: 'r', ans20: '1', ans21: '1', ans22: 'r', ans23: '1', ans24: 'r', ans25: 'r', // 3rd Simplify
      ans26: 'r', ans27: 'r', ans28: 'r', ans29: '1', ans30: 'r', ans31: 'r', ans32: '1', ans33: 'r', // 4th Simplify
      ans34: 'r', ans35: 'r', ans36: 'r', ans37: 'r', ans38: 'r', ans39: '1', ans40: 'r', // 5th Simplify
      ans41: 'r', ans42: 'r', ans43: 'r', ans44: 'r', ans45: '1', ans46: 'r', // 6th Simplify
      ans47: 'r', ans48: 'r', ans49: '1', ans50: 'r' // Final Answer
    };

    // Check if all answers are correct
    const isCorrect =
      this.lcd1 === correctAnswers.lcd1 &&
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
      this.ans50 === correctAnswers.ans50;

    const resultMessage = isCorrect ? 'Correct!' : 'Incorrect. Please try again.';

    const alert = await this.alertController.create({
      header: 'Result',
      message: resultMessage,
      buttons: [
        {
          text: 'Next',
          handler: () => {
            if (isCorrect) {
              this.router.navigate(['/question3-8']); // Navigate to the next page if the answer is correct
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
    this.lcd1 = 'r'; // Reset LCD input

    this.ans1 = 'r'; // Reset answers
    this.ans2 = '1';
    this.ans3 = 'r';
    this.ans4 = 'r';
    this.ans5 = '1';
    this.ans6 = 'r';
    this.ans7 = '1';
    this.ans8 = 'r';
    this.ans9 = '1';
    this.ans10 = 'r';
    this.ans11 = 'r';
    this.ans12 = 'r';
    this.ans13 = '1';
    this.ans14 = '1';
    this.ans15 = 'r';
    this.ans16 = '1';
    this.ans17 = 'r';
    this.ans18 = 'r';
    this.ans19 = 'r';
    this.ans20 = '1';
    this.ans21 = '1';
    this.ans22 = 'r';
    this.ans23 = '1';
    this.ans24 = 'r';
    this.ans25 = 'r';
    this.ans26 = 'r';
    this.ans27 = 'r';
    this.ans28 = 'r';
    this.ans29 = '1';
    this.ans30 = 'r';
    this.ans31 = 'r';
    this.ans32 = '1';
    this.ans33 = 'r';
    this.ans34 = 'r';
    this.ans35 = 'r';
    this.ans36 = 'r';
    this.ans37 = 'r';
    this.ans38 = 'r';
    this.ans39 = '1';
    this.ans40 = 'r';
    this.ans41 = 'r';
    this.ans42 = 'r';
    this.ans43 = 'r';
    this.ans44 = 'r';
    this.ans45 = '1';
    this.ans46 = 'r';
    this.ans47 = 'r';
    this.ans48 = 'r';
    this.ans49 = '1';
    this.ans50 = 'r';
  }

}
 