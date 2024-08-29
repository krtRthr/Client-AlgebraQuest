import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service'; // Import ScoreService

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

  constructor(
    private alertController: AlertController, 
    private router: Router, 
    private scoreService: ScoreService // Inject ScoreService
  ) {}

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

    // Count correct answers
    let score = 0;
    score += this.num1 === correctAnswers.num1 ? 1 : 0;
    score += this.num2 === correctAnswers.num2 ? 1 : 0;
    score += this.num3 === correctAnswers.num3 ? 1 : 0;
    score += this.num4 === correctAnswers.num4 ? 1 : 0;
    score += this.num5 === correctAnswers.num5 ? 1 : 0;
    score += this.num6 === correctAnswers.num6 ? 1 : 0;
    score += this.num7 === correctAnswers.num7 ? 1 : 0;
    score += this.simp1 === correctAnswers.simp1 ? 1 : 0;
    score += this.simp2 === correctAnswers.simp2 ? 1 : 0;
    score += this.simp3 === correctAnswers.simp3 ? 1 : 0;
    score += this.simp4 === correctAnswers.simp4 ? 1 : 0;
    score += this.simp5 === correctAnswers.simp5 ? 1 : 0;
    score += this.simp6 === correctAnswers.simp6 ? 1 : 0;
    score += this.ans1 === correctAnswers.ans1 ? 1 : 0;
    score += this.ans2 === correctAnswers.ans2 ? 1 : 0;
    score += this.ans3 === correctAnswers.ans3 ? 1 : 0;
    score += this.ans4 === correctAnswers.ans4 ? 1 : 0;
    score += this.ans5 === correctAnswers.ans5 ? 1 : 0;

    // Set the result message
    const resultMessage = score === Object.keys(correctAnswers).length ? 'Correct!' : 'Incorrect. Please try again.';

    // Update score if any answer is correct
    if (score > 0) {
      this.scoreService.addScore(score); // Add score if at least one answer is correct
    }

    // Present the alert
    const alert = await this.alertController.create({
      header: 'Result',
      message: resultMessage,
      buttons: [
        {
          text: 'Next',
          handler: () => {
            if (score === Object.keys(correctAnswers).length) {
              this.router.navigate(['/question2-10']); // Navigate to the next page if all answers are correct
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
