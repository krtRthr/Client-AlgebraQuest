import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service'; // Import ScoreService

@Component({
  selector: 'app-question3-4',
  templateUrl: './question3-4.page.html',
  styleUrls: ['./question3-4.page.scss'],
})
export class Question34Page implements OnInit {

  lcd1: string = '';
  lcd2: string = '';
  lcd3: string = '';
  lcd4: string = ''; // Added new LCD input

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
  ans42: string = ''; // Added new answers
  ans43: string = '';
  ans44: string = '';
  ans45: string = '';
  ans46: string = '';
  ans47: string = '';
  ans48: string = '';
  ans49: string = '';
  ans50: string = '';
  ans51: string = '';
  ans52: string = '';
  ans53: string = '';
  ans54: string = '';
  ans55: string = '';
  ans56: string = '';
  ans57: string = '';
  ans58: string = '';
  ans59: string = '';
  ans60: string = '';
  ans61: string = '';
  ans62: string = '';
  ans63: string = '';
  ans64: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private scoreService: ScoreService // Inject ScoreService
  ) {}

  ngOnInit() {}

  async checkAnswers() {
    // Define the correct answers
    const correctAnswers = {
      lcd1: 'a', lcd2: '1', lcd3: 'a', lcd4: '1', // LCD answers

      ans1: '6', ans2: '4', ans3: 'a', ans4: '1', ans5: '5', ans6: 'a', ans7: '1', ans8: 'a', ans9: '1', ans10: 'a', ans11: '1', // 1st Simplify
      ans12: '6', ans13: '4', ans14: 'a', ans15: '1', ans16: 'a', ans17: '1', ans18: 'a', ans19: '1', ans20: '5', ans21: 'a', ans22: '1', ans23: 'a', ans24: '1', ans25: 'a', ans26: '1', // 2nd Simplify
      ans27: '6', ans28: '10', ans29: '4', ans30: 'a', ans31: '1', ans32: 'a', ans33: '1', ans34: '5', ans35: '5', ans36: 'a', ans37: '1', ans38: 'a', ans39: '1', // 3rd Simplify
      ans40: '6', ans41: '10', ans42: '4', ans43: '5', ans44: '5', ans45: 'a', ans46: '1', ans47: 'a', ans48: '1', // 4th Simplify
      ans49: '6', ans50: '10', ans51: '4', ans52: '5', ans53: '5', ans54: 'a', ans55: '1', ans56: 'a', ans57: '1', // 5th Simplify
      ans58: 'a', ans59: '10', ans60: '9', ans61: 'a', ans62: '1', ans63: 'a', ans64: '1' // Final Answer
    };

    // Check each answer and count the number of correct answers
    let score = 0;
    score += this.lcd1 === correctAnswers.lcd1 ? 1 : 0;
    score += this.lcd2 === correctAnswers.lcd2 ? 1 : 0;
    score += this.lcd3 === correctAnswers.lcd3 ? 1 : 0;
    score += this.lcd4 === correctAnswers.lcd4 ? 1 : 0; // Check new LCD input
    
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
    score += this.ans42 === correctAnswers.ans42 ? 1 : 0; // Check new answers
    score += this.ans43 === correctAnswers.ans43 ? 1 : 0;
    score += this.ans44 === correctAnswers.ans44 ? 1 : 0;
    score += this.ans45 === correctAnswers.ans45 ? 1 : 0;
    score += this.ans46 === correctAnswers.ans46 ? 1 : 0;
    score += this.ans47 === correctAnswers.ans47 ? 1 : 0;
    score += this.ans48 === correctAnswers.ans48 ? 1 : 0;
    score += this.ans49 === correctAnswers.ans49 ? 1 : 0;
    score += this.ans50 === correctAnswers.ans50 ? 1 : 0;
    score += this.ans51 === correctAnswers.ans51 ? 1 : 0;
    score += this.ans52 === correctAnswers.ans52 ? 1 : 0;
    score += this.ans53 === correctAnswers.ans53 ? 1 : 0;
    score += this.ans54 === correctAnswers.ans54 ? 1 : 0;
    score += this.ans55 === correctAnswers.ans55 ? 1 : 0;
    score += this.ans56 === correctAnswers.ans56 ? 1 : 0;
    score += this.ans57 === correctAnswers.ans57 ? 1 : 0;
    score += this.ans58 === correctAnswers.ans58 ? 1 : 0;
    score += this.ans59 === correctAnswers.ans59 ? 1 : 0;
    score += this.ans60 === correctAnswers.ans60 ? 1 : 0;
    score += this.ans61 === correctAnswers.ans61 ? 1 : 0;
    score += this.ans62 === correctAnswers.ans62 ? 1 : 0;
    score += this.ans63 === correctAnswers.ans63 ? 1 : 0;
    score += this.ans64 === correctAnswers.ans64 ? 1 : 0;

    const resultMessage = score === Object.keys(correctAnswers).length ? 'Correct!' : 'Incorrect. Please try again.';

    // Update score
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
              this.router.navigate(['/question3-5']); // Navigate to the next page if the answer is correct
              this.correctAudio();
            } else {
              this.router.navigate(['/question3-5']);
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
    this.lcd1 = '';
    this.lcd2 = '';
    this.lcd3 = '';
    this.lcd4 = ''; // Reset new LCD input

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
    this.ans42 = ''; // Reset new answers
    this.ans43 = '';
    this.ans44 = '';
    this.ans45 = '';
    this.ans46 = '';
    this.ans47 = '';
    this.ans48 = '';
    this.ans49 = '';
    this.ans50 = '';
    this.ans51 = '';
    this.ans52 = '';
    this.ans53 = '';
    this.ans54 = '';
    this.ans55 = '';
    this.ans56 = '';
    this.ans57 = '';
    this.ans58 = '';
    this.ans59 = '';
    this.ans60 = '';
    this.ans61 = '';
    this.ans62 = '';
    this.ans63 = '';
    this.ans64 = '';
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
