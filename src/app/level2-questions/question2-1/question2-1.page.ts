import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-question2-1',
  templateUrl: './question2-1.page.html',
  styleUrls: ['./question2-1.page.scss'],
})
export class Question21Page implements OnInit {

  // Define properties for each input
  num1: string = '';
  num2: string = '';
  num3: string = '';
  num4: string = '';
  num5: string = '';

  ans1: string = '';
  ans2: string = '';
  ans3: string = '';
  ans4: string = '';

  constructor(
    private alertController: AlertController, 
    private router: Router, 
    private scoreService: ScoreService // Correctly injected ScoreService
  ) {}

  ngOnInit() {}

  async checkAnswers() {
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

    // Check each answer and count the number of correct answers
    let score = 0;
    score += this.num1 === correctAnswers.num1 ? 1 : 0;
    score += this.num2 === correctAnswers.num2 ? 1 : 0;
    score += this.num3 === correctAnswers.num3 ? 1 : 0;
    score += this.num4 === correctAnswers.num4 ? 1 : 0;
    score += this.num5 === correctAnswers.num5 ? 1 : 0;
    score += this.ans1 === correctAnswers.ans1 ? 1 : 0;
    score += this.ans2 === correctAnswers.ans2 ? 1 : 0;
    score += this.ans3 === correctAnswers.ans3 ? 1 : 0;
    score += this.ans4 === correctAnswers.ans4 ? 1 : 0;

    // Set the result message
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
              this.router.navigate(['/question2-2']); // Navigate to the next page if all answers are correct
              this.correctAudio();
            }
            else{
              this.router.navigate(['/question2-2']);
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
    this.ans1 = '';
    this.ans2 = '';
    this.ans3 = '';
    this.ans4 = '';
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
  
}
