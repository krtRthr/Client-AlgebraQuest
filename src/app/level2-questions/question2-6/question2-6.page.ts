import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-question2-6',
  templateUrl: './question2-6.page.html',
  styleUrls: ['./question2-6.page.scss'],
})
export class Question26Page implements OnInit {

  ngOnInit() {}

  correctAnswer: string = 'choice-1';
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

      await this.presentAlert(header, message, this.selectedAnswer === this.correctAnswer);
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

  async presentAlert(header: string, message: string, isCorrect: boolean) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: isCorrect ? 'Next Question' : 'Try Again',
          handler: () => {
            if (isCorrect) {
              this.router.navigate(['/question2-7']);
            } else {
              this.showResult = false; // Reset for retry
              this.selectedAnswer = ''; // Clear selected answer
            }
          }
        }
      ],
      cssClass: 'custom-alert'
    });
    await alert.present();
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
}
