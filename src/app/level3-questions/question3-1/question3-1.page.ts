import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service'; // Import ScoreService

@Component({
  selector: 'app-question3-1',
  templateUrl: './question3-1.page.html',
  styleUrls: ['./question3-1.page.scss'],
})
export class Question31Page implements OnInit {

  lcd: string = '';
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

  constructor(
    private alertController: AlertController,
    private router: Router,
    private scoreService: ScoreService // Inject ScoreService
  ) {}

  ngOnInit() {}

  async checkAnswers() {
    // Define the correct answers
    const correctAnswers = {
      lcd: '6',
      ans1: 'x',
      ans2: '1',
      ans3: '2',
      ans4: 'x',
      ans5: '3',
      ans6: '3',
      ans7: '6',
      ans8: '3',
      ans9: 'x',
      ans10: '1',
      ans11: '6',
      ans12: '2',
      ans13: 'x',
      ans14: '3',
      ans15: '6',
      ans16: '3',
      ans17: '3',
      ans18: '6',
      ans19: '2',
      ans20: '6',
      ans21: '6',
      ans22: '3',
      ans23: '3',
      ans24: '2',
      ans25: '6',
      ans26: '6',
      ans27: '5',
      ans28: '3',
      ans29: '6',
    };

    // Check each answer and count the number of correct answers
    let score = 0;
    score += this.lcd === correctAnswers.lcd ? 1 : 0;
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
          text: 'Next Question',
          handler: () => {
            if (score === Object.keys(correctAnswers).length) {
              this.router.navigate(['/question3-2']); // Navigate to the next page if all answers are correct
              this.correctAudio();
            } else {
              this.router.navigate(['/question3-2']);
              this.incorrectAudio();
            }
          }
        }
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  resetInputs() {
    this.lcd = '';
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
  }
  playButton(){
    let audio = new Audio();
    audio.src = "../assets/audio/button-124476.mp3";
    audio.load();
    audio.play();
   }
   correctAudio(){
    let audio = new Audio();
    audio.src ="../assets/audio/win.wav"
    audio.load();
    audio.play();
   }
   incorrectAudio(){
    let audio = new Audio();
    audio.src="../assets/audio/lose.wav"
    audio.load();
    audio.play();
   }
}
