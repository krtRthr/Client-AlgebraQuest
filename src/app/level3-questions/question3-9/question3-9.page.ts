import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-question3-9',
  templateUrl: './question3-9.page.html',
  styleUrls: ['./question3-9.page.scss'],
})
export class Question39Page implements OnInit {

  // LCD Inputs
  lcd1: string = '';
  lcd2: string = '';
  lcd3: string = '';

  // 1st Simplify
  ans1: string = '';
  ans2: string = '';
  ans3: string = '';
  ans4: string = '';
  ans5: string = '';
  ans6: string = '';
  ans7: string = '';
  ans8: string = '';

  // 2nd Simplify
  ans9: string = '';
  ans10: string = '';
  ans11: string = '';
  ans12: string = '';
  ans13: string = '';
  ans14: string = '';

  // 3rd Simplify
  ans15: string = '';
  ans16: string = '';
  ans17: string = '';
  ans18: string = '';
  ans19: string = '';
  ans20: string = '';
  ans21: string = '';
  ans22: string = '';
  ans23: string = '';

  // 4th Simplify
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

  // 5th Simplify
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

  // Final Answer
  ans46: string = '';
  ans47: string = '';
  ans48: string = '';
  ans49: string = '';
  ans50: string = '';
  ans51: string = '';

  constructor(private alertController: AlertController, private router: Router, private scoreService: ScoreService) {}

  ngOnInit() {}

  async checkAnswers() {
    // Define the correct answers
    const correctAnswers = {
      lcd1: '2',
      lcd2: 'x',
      lcd3: 'y',
      ans1: 'x',
      ans2: 'y',
      ans3: '2',
      ans4: 'x',
      ans5: 'y',
      ans6: 'x',
      ans7: 'x',
      ans8: 'y',
      ans9: 'x',
      ans10: 'y',
      ans11: '2',
      ans12: 'x',
      ans13: 'x',
      ans14: 'y',
      ans15: 'x',
      ans16: 'y',
      ans17: '2',
      ans18: 'x',
      ans19: 'x',
      ans20: 'y',
      ans21: '2',
      ans22: 'x',
      ans23: 'y',
      ans24: 'x',
      ans25: 'y',
      ans26: 'x',
      ans27: 'y',
      ans28: '2',
      ans29: 'x',
      ans30: 'y',
      ans31: '2',
      ans32: 'x',
      ans33: '2',
      ans34: 'x',
      ans35: 'y',
      ans36: 'x',
      ans37: 'y',
      ans38: '2',
      ans39: 'x',
      ans40: 'y',
      ans41: '2',
      ans42: 'x',
      ans43: '2',
      ans44: 'x',
      ans45: 'y',
      ans46: 'x',
      ans47: '2',
      ans48: 'y',
      ans49: '2',
      ans50: 'x',
      ans51: 'y',
    };

    // Check if all answers are correct
          let score = 0;
      score += this.lcd1 === correctAnswers.lcd1 ? 1 : 0;
      score += this.lcd2 === correctAnswers.lcd2 ? 1 : 0;
      score += this.lcd3 === correctAnswers.lcd3 ? 1 : 0;
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
      score += this.ans51 === correctAnswers.ans51 ? 1 : 0;


      const resultMessage = score === Object.keys(correctAnswers).length ? 'Correct!' : 'Incorrect. Please try again.';

      if (score > 0) {
        this.scoreService.addScore(score); // Add score if at least one answer is correct
      }

    const alert = await this.alertController.create({
      header: 'Result',
      message: resultMessage,
      buttons: [
        {
          text: 'Next Question',
          handler: () => {
            if (score === Object.keys(correctAnswers).length) {
              this.router.navigate(['/question3-10']); // Navigate to the next page if the answer is correct
              this.correctAudio();
            } else {
              this.router.navigate(['/question3-10']);
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
    // Reset LCD Inputs
    this.lcd1 = '';
    this.lcd2 = '';
    this.lcd3 = '';

    // Reset 1st Simplify
    this.ans1 = '';
    this.ans2 = '';
    this.ans3 = '';
    this.ans4 = '';
    this.ans5 = '';
    this.ans6 = '';
    this.ans7 = '';
    this.ans8 = '';

    // Reset 2nd Simplify
    this.ans9 = '';
    this.ans10 = '';
    this.ans11 = '';
    this.ans12 = '';
    this.ans13 = '';
    this.ans14 = '';

    // Reset 3rd Simplify
    this.ans15 = '';
    this.ans16 = '';
    this.ans17 = '';
    this.ans18 = '';
    this.ans19 = '';
    this.ans20 = '';
    this.ans21 = '';
    this.ans22 = '';
    this.ans23 = '';

    // Reset 4th Simplify
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

    // Reset 5th Simplify
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

    // Reset Final Answer
    this.ans46 = '';
    this.ans47 = '';
    this.ans48 = '';
    this.ans49 = '';
    this.ans50 = '';
    this.ans51 = '';
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
 