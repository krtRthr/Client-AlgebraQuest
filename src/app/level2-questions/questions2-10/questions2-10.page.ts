import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-question2-10',
  templateUrl: './questions2-10.page.html',
  styleUrls: ['./questions2-10.page.scss'],
})
export class Questions210Page implements OnInit {
  
  // Define properties for each input
  num1: string = '';
  num2: string = '';
  num3: string = '';
  num4: string = '';
  num5: string = '';
  num6: string = '';
  num7: string = '';
  num8: string = '';
  num9: string = '';
  num10: string = '';
  simp1: string = '';
  simp2: string = '';
  simp3: string = '';
  simp4: string = '';
  simp5: string = '';
  simp6: string = '';
  simp7: string = '';
  simp8: string = '';
  simp9: string = '';
  ans1: string = '';
  ans2: string = '';
  ans3: string = '';
  ans4: string = '';
  ans5: string = '';
  ans6: string = '';
  ans7: string = '';

  constructor(
    private alertController: AlertController, 
    private router: Router, 
    private scoreService: ScoreService // Inject the ScoreService
  ) {}

  ngOnInit() {}

  async checkAnswers() {
    const correctAnswers = {
      num1: '7',
      num2: '2',
      num3: '3',
      num4: '6',
      num5: 'x',
      num6: '2',
      num7: 'z',
      num8: '7',
      num9: 'x',
      num10: '1',
      simp1: '7',
      simp2: '2',
      simp3: '3',
      simp4: '6',
      simp5: '12',
      simp6: '6',
      simp7: '7',
      simp8: 'x',
      simp9: '1',
      ans1: '7',
      ans2: '14',
      ans3: '9',
      ans4: '6',
      ans5: '7',
      ans6: 'x',
      ans7: '1'
    };

    const isCorrect =
      this.num1 === correctAnswers.num1 &&
      this.num2 === correctAnswers.num2 &&
      this.num3 === correctAnswers.num3 &&
      this.num4 === correctAnswers.num4 &&
      this.num5 === correctAnswers.num5 &&
      this.num6 === correctAnswers.num6 &&
      this.num7 === correctAnswers.num7 &&
      this.num8 === correctAnswers.num8 &&
      this.num9 === correctAnswers.num9 &&
      this.num10 === correctAnswers.num10 &&
      this.simp1 === correctAnswers.simp1 &&
      this.simp2 === correctAnswers.simp2 &&
      this.simp3 === correctAnswers.simp3 &&
      this.simp4 === correctAnswers.simp4 &&
      this.simp5 === correctAnswers.simp5 &&
      this.simp6 === correctAnswers.simp6 &&
      this.simp7 === correctAnswers.simp7 &&
      this.simp8 === correctAnswers.simp8 &&
      this.simp9 === correctAnswers.simp9 &&
      this.ans1 === correctAnswers.ans1 &&
      this.ans2 === correctAnswers.ans2 &&
      this.ans3 === correctAnswers.ans3 &&
      this.ans4 === correctAnswers.ans4 &&
      this.ans5 === correctAnswers.ans5 &&
      this.ans6 === correctAnswers.ans6 &&
      this.ans7 === correctAnswers.ans7;

    const resultMessage = isCorrect ? 'Correct!' : 'Incorrect. Please try again.';

    if (isCorrect) {
      this.scoreService.addScore(10); // Add points to the score if correct
    }

    const alert = await this.alertController.create({
      header: 'Result',
      message: resultMessage,
      buttons: [
        {
          text: 'Next',
          handler: () => {
            if (isCorrect) {
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
    this.num1 = '';
    this.num2 = '';
    this.num3 = '';
    this.num4 = '';
    this.num5 = '';
    this.num6 = '';
    this.num7 = '';
    this.num8 = '';
    this.num9 = '';
    this.num10 = '';
    this.simp1 = '';
    this.simp2 = '';
    this.simp3 = '';
    this.simp4 = '';
    this.simp5 = '';
    this.simp6 = '';
    this.simp7 = '';
    this.simp8 = '';
    this.simp9 = '';
    this.ans1 = '';
    this.ans2 = '';
    this.ans3 = '';
    this.ans4 = '';
    this.ans5 = '';
    this.ans6 = '';
    this.ans7 = '';
  }
}
