import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-question3-7',
  templateUrl: './question3-7.page.html',
  styleUrls: ['./question3-7.page.scss'],
})
export class Question37Page implements OnInit {

  lcd1: string = ''; // Updated LCD input

  ans1: string = ''; // 1st Simplify
  ans2: string = '1';
  ans3: string = 'r';
  ans4: string = 'r';
  ans5: string = '1';
  ans6: string = 'r';
  ans7: string = '1';
  ans8: string = 'r';
  ans9: string = '1';
  ans10: string = 'r';

  ans11: string = 'r'; // 2nd Simplify
  ans12: string = 'r';
  ans13: string = '1';
  ans14: string = '1';
  ans15: string = 'r';
  ans16: string = '1';
  ans17: string = 'r';

  ans18: string = 'r'; // 3rd Simplify
  ans19: string = 'r';
  ans20: string = '1';
  ans21: string = '1';
  ans22: string = 'r';
  ans23: string = '1';
  ans24: string = 'r';
  ans25: string = 'r';

  ans26: string = 'r'; // 4th Simplify
  ans27: string = 'r';
  ans28: string = 'r';
  ans29: string = '1';
  ans30: string = 'r';
  ans31: string = 'r';
  ans32: string = '1';
  ans33: string = 'r';

  ans34: string = 'r'; // 5th Simplify
  ans35: string = 'r';
  ans36: string = 'r';
  ans37: string = 'r';
  ans38: string = 'r';
  ans39: string = '1';
  ans40: string = 'r';

  ans41: string = 'r'; // 6th Simplify
  ans42: string = 'r';
  ans43: string = 'r';
  ans44: string = 'r';
  ans45: string = '1';
  ans46: string = 'r';

  ans47: string = 'r'; // Final Answer
  ans48: string = 'r';
  ans49: string = '1';
  ans50: string = 'r';

  constructor(private alertController: AlertController, private router: Router, private scoreService: ScoreService
  ) {}

  ngOnInit() {}

  async checkAnswers() {
    // Define the correct answers
    const correctAnswers = {
      lcd1: 'r', // LCD answers

      ans1: 'r', ans2: '1', ans3: 'r', ans4: 'r', ans5: '1', ans6: 'r', ans7: '1', ans8: 'r', ans9: '1', ans10: 'r', // 1st Simplify
      ans11: 'r', ans12: 'r', ans13: '1', ans14: '1', ans15: 'r', ans16: '1', ans17: 'r', // 2nd Simplify
      ans18: 'r', ans19: 'r', ans20: '1', ans21: '1', ans22: 'r', ans23: '1', ans24: 'r', ans25: 'r', // 3rd Simplify
      ans26: 'r', ans27: 'r', ans28: 'r', ans29: '1', ans30: 'r', ans31: 'r', ans32: '1', ans33: 'r', // 4th Simplify
      ans34: 'r', ans35: 'r', ans36: 'r', ans37: 'r', ans38: 'r', ans39: '1', ans40: 'r', // 5th Simplify
      ans41: 'r', ans42: 'r', ans43: 'r', ans44: 'r', ans45: '1', ans46: 'r', // 6th Simplify
      ans47: 'r', ans48: 'r', ans49: '1', ans50: 'r' // Final Answer
    };

    // Check if all answers are correct
        let score = 0;
    score += this.lcd1 === correctAnswers.lcd1 ? 1 : 0;
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
    score += this.ans48 === correctAnswers.ans48 ? 1 : 0;
    score += this.ans49 === correctAnswers.ans49 ? 1 : 0;
    score += this.ans50 === correctAnswers.ans50 ? 1 : 0;


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
              this.router.navigate(['/question3-8']); // Navigate to the next page if the answer is correct
              this.correctAudio()
            }
          }
        },
        {
          text: 'Try Again',
          handler: () => {
            this.resetInputs(); // Reset the input fields
            this.incorrectAudio()
          }
        }
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  resetInputs() {
    this.lcd1 = ''; // Reset LCD input

    // Reset answers
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
    this.ans48 = '';
    this.ans49 = '';
    this.ans50 = '';
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