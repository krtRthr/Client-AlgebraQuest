import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-question2-2',
  templateUrl: './question2-2.page.html',
  styleUrls: ['./question2-2.page.scss'],
})
export class Question22Page implements OnInit {

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
    private scoreService: ScoreService 
  ) {}

  ngOnInit() {}

  async checkAnswers() {
    
    const correctAnswers = {
      num1: '7',
      num2: '6',
      num3: '1',
      num4: '3',
      num5: '1',
      ans1: 'y',
      ans2: '1',
      ans3: '3',
      ans4: '1'
    };

    // Validate answers
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

    const resultMessage = score === Object.keys(correctAnswers).length ? 'Correct!' : 'Incorrect. Please try again.';

    if (score > 0) {
      this.scoreService.addScore(score);
    }

    const alert = await this.alertController.create({
      header: 'Result',
      message: resultMessage,
      buttons: [
        {
          text: 'Next',
          handler: () => {
            if (score === Object.keys(correctAnswers).length) {
              this.router.navigate(['/question2-3']); // Navigate to the next page if all answers are correct
              this.correctAudio();
            }
            else{  
              this.router.navigate(['/question2-3']);
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
    let audio = new Audio();
    audio.src = "../assets/audio/choose_button.mp3";
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
    audio.src = "../assets/audio/win.wav";
    audio.load();
    audio.play();
  }

  incorrectAudio(){
    let audio = new Audio();
    audio.src = "../assets/audio/lose.wav";
    audio.load();
    audio.play();
  }
}
