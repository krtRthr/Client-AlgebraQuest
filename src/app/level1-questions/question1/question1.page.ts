import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.page.html',
  styleUrls: ['./question1.page.scss'],
})
export class Question1Page {

  correctAnswer: string = 'choice-3';
  selectedAnswer: string = '';
  showResult: boolean = false;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private scoreService: ScoreService 
  ) {}

  selectAnswer(answer: string) {
    if (!this.showResult) {
      this.selectedAnswer = answer;
    }
  }

  async submitAnswer() {
    if (this.selectedAnswer) {
      this.showResult = true;

      let header: string;
      let message: string;

      if (this.selectedAnswer === this.correctAnswer) {
        this.scoreService.incrementScore();
        header = 'Correct';
        message = 'You selected the correct answer.';
        this.correctAudio();
      } else {
        header = 'Incorrect';
        message = 'You selected the wrong answer.';
        this.incorrectAudio();
      }

      await this.presentAlert(header, message);
    } else {
      const alert = await this.alertController.create({
        header: 'No Answer Selected',
        message: 'Please select an answer before submitting.',
        buttons: ['OK']
        
      });
      await alert.present();
      this.incorrectAudio();
    }
  }

  getClass(answer: string) {
    if (!this.showResult) {
      return this.selectedAnswer === answer ? 'selected' : '';
    } else {
      if (answer === this.correctAnswer) {
        return 'correct';
      } else if (this.selectedAnswer === answer) {
        return 'incorrect';
      }
    }
    return '';
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
        text: 'Next Question',
        handler: () => {
          this.router.navigate(['/question2']);
        }
      }, 
      {
        text: 'Try Again'
      }
    ],
      cssClass: 'custom-alert'
    });
    await alert.present();
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
