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
  num8: string = '';
  num9: string = '';
  num10: string = '';
  num11: string = '';
  num12: string = '';
  num13: string = '';
  num14: string = '';
  num15: string = '';
  num16: string = '';
  num17: string = '';
  num18: string = '';
  num19: string = '';
  num20: string = '';
  num21: string = '';
  num22: string = '';
  num23: string = '';

  ans1: string = '';
  ans2: string = '';
  ans3: string = '';
  ans4: string = '';
  ans5: string = '';
  ans6: string = '';

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
      num3: '2',
      num4: '2',
      num5: 'x',
      num6: '2',
      num7: '1',
      num8: '',
      num9: '',
      num10: '',
      num11: '',
      num12: '',
      num13: '',
      num14: '',
      num15: '',
      num16: '',
      num17: '',
      num18: '',
      num19: '',
      num20: '',
      num21: '',
      num22: '',
      num23: '',

      ans1: 'x',
      ans2: '2',
      ans3: '1',
      ans4: 'x',
      ans5: '2',
      ans6: '1',
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
    score += this.ans1 === correctAnswers.ans1 ? 1 : 0;
    score += this.ans2 === correctAnswers.ans2 ? 1 : 0;
    score += this.ans3 === correctAnswers.ans3 ? 1 : 0;
    score += this.ans4 === correctAnswers.ans4 ? 1 : 0;
    score += this.ans5 === correctAnswers.ans5 ? 1 : 0;
    score += this.ans6 === correctAnswers.ans6 ? 1 : 0;

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
            }
            else{
              this.router.navigate(['/question2-8']);
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
    this.ans1 = '';
    this.ans2 = '';
    this.ans3 = '';
    this.ans4 = '';
    this.ans5 = '';
    this.ans6 = '';
  }
  choose_button(){
    let audio = new Audio;
    audio.src="../assets/audio/choose_button.mp3"
    audio.load();
    audio.play();
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
   bgMusic(){
    let audio = new Audio();
    audio.src="../assets/audio/background.mp3"
   }
}
