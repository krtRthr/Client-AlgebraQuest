import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service'; // Import ScoreService

@Component({
  selector: 'app-question3-2',
  templateUrl: './question3-2.page.html',
  styleUrls: ['./question3-2.page.scss'],
})
export class Question32Page implements OnInit {

  // Define properties for each input
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
  lcd: string = '';
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

  constructor(
    private alertController: AlertController,
    private router: Router,
    private scoreService: ScoreService // Inject ScoreService
  ) {}

  ngOnInit() {}

  async checkAnswers() {
    // Define the correct answers
    const correctAnswers = {
      ans1: '4', ans2: '3', ans3: '6', ans4: '8', ans5: 'x', ans6: '1', ans7: '12',
      ans8: '4', ans9: '3', ans10: '6', ans11: '2', ans12: 'x', ans13: '1', ans14: '3',
      lcd: '6',
      ans15: '4', ans16: '3', ans17: '6', ans18: '2', ans19: 'x', ans20: '1', ans21: '3', ans22: '6',
      ans23: '4', ans24: '3', ans25: '6', ans26: '4', ans27: 'x', ans28: '1', ans29: '6',
      ans30: '4', ans31: '3', ans32: '6', ans33: '4', ans34: '4', ans35: '6',
      ans36: '4', ans37: '3', ans38: '4', ans39: '4', ans40: '6',
      ans41: '4', ans42: '3', ans43: '4', ans44: '4', ans45: '6',
      ans46: '1', ans47: '6'
    };

    // Check each answer and count the number of correct answers
    let score = 0;
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
    score += this.lcd === correctAnswers.lcd ? 1 : 0;
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
              this.router.navigate(['/question3-3']); // Navigate to the next page if all answers are correct
              this.correctAudio();
            } else {
              this.router.navigate(['/question3-3']);
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
    // Reset all input fields
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
    this.lcd = '';
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
