import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question2-9',
  templateUrl: './question2-9.page.html',
  styleUrls: ['./question2-9.page.scss'],
})
export class Question29Page implements OnInit {

  // Define properties for each input
  num1: string = '';
  num2: string = '';
  num3: string = '';
  num4: string = '';
  num5: string = '';
  num6: string = '';
  num7: string = '';
  simp1: string = '';
  simp2: string = '';
  simp3: string = '';
  simp4: string = '';
  simp5: string = '';
  simp6: string = '';
  ans1: string = '';
  ans2: string = '';
  ans3: string = '';
  ans4: string = '';
  ans5: string = '';

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {}

  async checkAnswers() {
    const correctAnswers = {
      num1: '3',
      num2: '3',
      num3: '2',
      num4: 'y',
      num5: '2',
      num6: '7',
      num7: 'x',
      simp1: '3',
      simp2: '9',
      simp3: '2',
      simp4: '4',
      simp5: '7',
      simp6: 'x',
      ans1: '3',
      ans2: '2',
      ans3: '13',
      ans4: '7',
      ans5: 'x'
    };

    const isCorrect =
      this.num1 === correctAnswers.num1 &&
      this.num2 === correctAnswers.num2 &&
      this.num3 === correctAnswers.num3 &&
      this.num4 === correctAnswers.num4 &&
      this.num5 === correctAnswers.num5 &&
      this.num6 === correctAnswers.num6 &&
      this.num7 === correctAnswers.num7 &&
      this.simp1 === correctAnswers.simp1 &&
      this.simp2 === correctAnswers.simp2 &&
      this.simp3 === correctAnswers.simp3 &&
      this.simp4 === correctAnswers.simp4 &&
      this.simp5 === correctAnswers.simp5 &&
      this.simp6 === correctAnswers.simp6 &&
      this.ans1 === correctAnswers.ans1 &&
      this.ans2 === correctAnswers.ans2 &&
      this.ans3 === correctAnswers.ans3 &&
      this.ans4 === correctAnswers.ans4 &&
      this.ans5 === correctAnswers.ans5;

    const resultMessage = isCorrect ? 'Correct!' : 'Incorrect. Please try again.';

    const alert = await this.alertController.create({
      header: 'Result',
      message: resultMessage,
      buttons: [
        {
          text: 'Next',
          handler: () => {
            if (isCorrect) {
              this.router.navigate(['/question2-10']); // Navigate to the next page if the answer is correct
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
    this.num1 = '';
    this.num2 = '';
    this.num3 = '';
    this.num4 = '';
    this.num5 = '';
    this.num6 = '';
    this.num7 = '';
    this.simp1 = '';
    this.simp2 = '';
    this.simp3 = '';
    this.simp4 = '';
    this.simp5 = '';
    this.simp6 = '';
    this.ans1 = '';
    this.ans2 = '';
    this.ans3 = '';
    this.ans4 = '';
    this.ans5 = '';
  }
}
