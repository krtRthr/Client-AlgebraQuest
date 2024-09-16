import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service'; // Import ScoreService

@Component({
  selector: 'app-question2-5',
  templateUrl: './question2-5.page.html',
  styleUrls: ['./question2-5.page.scss'],
})
export class Question25Page implements OnInit {

  num1: string = '';
  num2: string = '';
  num3: string = '';
  num4: string = '';

  constructor(
    private alertController: AlertController, 
    private router: Router, 
    private scoreService: ScoreService // Inject ScoreService
  ) {}

  ngOnInit() {}

  async checkAnswers() {
    const correctAnswers = {
      num1: 'x',
      num2: 'y',
      num3: '7',
      num4: 'z',
    };

    // Check each answer and count the number of correct answers
    let score = 0;
    score += this.num1 === correctAnswers.num1 ? 1 : 0;
    score += this.num2 === correctAnswers.num2 ? 1 : 0;
    score += this.num3 === correctAnswers.num3 ? 1 : 0;
    score += this.num4 === correctAnswers.num4 ? 1 : 0;

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
              this.router.navigate(['/question2-6']); // Navigate to the next page if all answers are correct
              this.correctAudio();
            }
            else{
              this.router.navigate(['/question2-6']);
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
    this.num1 = '';
    this.num2 = '';
    this.num3 = '';
    this.num4 = '';
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
