import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-question2-1',
  templateUrl: './question2-1.page.html',
  styleUrls: ['./question2-1.page.scss'],
})
export class Question21Page implements OnInit {

  num1: string = '';
  num2: string = '';
  num3: string = '';
  num4: string = '';
  num5: string = '';

  ans1: string = '';
  ans2: string = '';
  ans3: string = '';
  ans4: string = '';

  result: string = '';

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async checkAnswers() {
    // Correct answers
    const correctAnswers = {
      num1: '3',
      num2: '1',
      num3: '2',
      num4: 'x',
      num5: '3',
      ans1: '3',
      ans2: '3',
      ans3: 'x',
      ans4: '3'
    };

    // Validate inputs
    const isCorrect =
      this.num1 === correctAnswers.num1 &&
      this.num2 === correctAnswers.num2 &&
      this.num3 === correctAnswers.num3 &&
      this.num4 === correctAnswers.num4 &&
      this.num5 === correctAnswers.num5 &&
      this.ans1 === correctAnswers.ans1 &&
      this.ans2 === correctAnswers.ans2 &&
      this.ans3 === correctAnswers.ans3 &&
      this.ans4 === correctAnswers.ans4;

    // Display the result
    const resultMessage = isCorrect ? 'Correct!' : 'Incorrect. Please try again.';

    // Present the alert
    const alert = await this.alertController.create({
      header: 'Result',
      message: resultMessage,
      buttons: [
        {
          text: 'Next',
          handler: () => {
            if (isCorrect) {
              this.router.navigate(['/question2-2']); // Navigate to the next page if the answer is correct
            }
          }
        },
        {
          text: 'Try Again',
          handler: () => {
            this.resetInputs();
          }
        }
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  resetInputs() {
    this.num1 = '';
    this.num2 = '';
    this.num3 = '';
    this.num4 = '';
    this.num5 = '';
    this.ans1 = '';
    this.ans2 = '';
    this.ans3 = '';
    this.ans4 = '';
  }
}
