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

  ngOnInit() {}
  correctAnswer: string = 'choice-3';
  selectedAnswer: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private scoreService: ScoreService 

  ) {}

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  async submitAnswer() {
    if (this.selectedAnswer) {
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

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
        text: 'Next Question',
        handler: () => {
          this.router.navigate(['/final-score']);
        }
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
   bgMusic(){
    let audio = new Audio();
    audio.src="../assets/audio/background.mp3"
   }
}