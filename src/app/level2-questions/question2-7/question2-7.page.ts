import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service'; // Import ScoreService

@Component({
  selector: 'app-question2-7',
  templateUrl: './question2-7.page.html',
  styleUrls: ['./question2-7.page.scss'],
})
export class Question27Page implements OnInit {

  num1: string = '';
  num2: string = '';
  num3: string = '';
  num4: string = '';
  num5: string = '';
  num6: string = '';
  num7: string = '';

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

  constructor(
    private alertController: AlertController, 
    private router: Router, 
    private scoreService: ScoreService // Inject ScoreService
  ) {}

  ngOnInit() {}

  async checkAnswers() {
    const correctAnswers = {
      num1: 'x',
      num2: '1',
      num3: 'x',
      num4: '1',
      num5: 'x',
      num6: '2',
      num7: '1',
      ans1: 'x',
      ans2: '2',
      ans3: '1',
      ans4: 'x',
      ans5: '1',
      ans6: 'x',
      ans7: '1',
      ans8: 'x',
      ans9: '1',
      ans10: '2',
      ans11: '2',
      ans12: 'x',
      ans13: '1',
    };

    // Check each answer and count the number of correct answers
    let score = 0;
    score += this.num1 === correctAnswers.num1 ? 1 : 0;
    score += this.num2 === correctAnswers.num2 ? 1 : 0;
    score += this.num3 === correctAnswers.num3 ? 1 : 0;
    score += this.num4 === correctAnswers.num4 ? 1 : 0;
    score += this.num5 === correctAnswers.num5 ? 1 : 0;
    score += this.num6 === correctAnswers.num6 ? 1 : 0;
    score += this.num7 === correctAnswers.num7 ? 1 : 0;
    score += this.num8 === correctAnswers.num8 ? 1 : 0;
    score += this.num9 === correctAnswers.num9 ? 1 : 0;
    score += this.num10 === correctAnswers.num10 ? 1 : 0;
    score += this.num11 === correctAnswers.num11 ? 1 : 0;
    score += this.num12 === correctAnswers.num12 ? 1 : 0;
    score += this.num13 === correctAnswers.num13 ? 1 : 0;
    score += this.num14 === correctAnswers.num14 ? 1 : 0;
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

    // Set the result message
    const resultMessage = score === Object.keys(correctAnswers).length ? 'Correct!' : 'Incorrect. Please try again.';

    // Update score
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
              this.router.navigate(['/question2-8']); // Navigate to the next page if all answers are correct
              this.correctAudio();
            } else {
              this.router.navigate(['/question2-7']); // Stay on the same page if answers are incorrect
            }
          }
        },
        {
          text: 'Try Again',
          handler: () => {
            this.resetInputs(); // Reset the input fields
            this.incorrectAudio();
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
    this.num11 = '';
    this.num12 = '';
    this.num13 = '';
    this.num14 = '';

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
  }

  choose_button() {
    let audio = new Audio();
    audio.src = "../assets/audio/choose_button.mp3";
    audio.load();
    audio.play();
  }

  playButton() {
    let audio = new Audio();
    audio.src = "../assets/audio/button-124476.mp3";
    audio.load();
    audio.play();
  }

  correctAudio() {
    let audio = new Audio();
    audio.src = "../assets/audio/win.wav";
    audio.load();
    audio.play();
  }

  incorrectAudio() {
    let audio = new Audio();
    audio.src = "../assets/audio/lose.wav";
    audio.load();
    audio.play();
  }

  bgMusic() {
    let audio = new Audio();
    audio.src = "../assets/audio/background.mp3";
    audio.loop = true; // Play background music on loop
    audio.play();
  }
}
