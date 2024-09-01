import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-question3-6',
  templateUrl: './question3-6.page.html',
  styleUrls: ['./question3-6.page.scss'],
})
export class Question36Page implements OnInit {

  lcd1: string = '';
  lcd2: string = '';
  lcd3: string = '';
  lcd4: string = '';
  lcd5: string = ''; // Added new LCD input

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
  ans42: string = '';
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
  ans65: string = '';
  ans66: string = '';
  ans67: string = '';
  ans68: string = '';
  ans69: string = '';
  ans70: string = '';
  ans71: string = '';
  ans72: string = '';
  ans73: string = '';
  ans74: string = '';
  ans75: string = '';
  ans76: string = '';
  ans77: string = '';
  ans78: string = '';
  ans79: string = '';
  ans80: string = '';
  ans81: string = '';
  ans82: string = '';

  constructor(private alertController: AlertController, private router: Router, private scoreService: ScoreService) {}

  ngOnInit() {}

  async checkAnswers() {
    // Define the correct answers
    const correctAnswers = {
      lcd1: 'c', lcd2: '1', lcd3: '2', lcd4: 'c', lcd5: '1', // LCD answers

      ans1: 'c', ans2: 'c', ans3: '1', ans4: '2', ans5: '2', ans6: '2', ans7: 'c', ans8: 'c', ans9: '1', // 1st Simplify
      ans10: '1', ans11: 'c', ans12: '1', ans13: '1', ans14: '2', ans15: 'c', ans16: '1', // 2nd Simplify
      ans17: '1', ans18: 'c', ans19: '1', ans20: '1', ans21: '2', ans22: 'c', ans23: '1', // 3rd Simplify
      ans24: '1', ans25: '2', ans26: 'c', ans27: '1', ans28: 'c', ans29: '1', ans30: '2', ans31: 'c', ans32: '1', ans33: '1', ans34: 'c', ans35: '1', ans36: 'c', ans37: '1', ans38: '2', ans39: 'c', ans40: '1', // 4th Simplify
      ans41: '2', ans42: 'c', ans43: '1', ans44: 'c', ans45: '1', ans46: '2', ans47: 'c', ans48: '1', ans49: 'c', ans50: '1', ans51: 'c', ans52: '1', ans53: '2', ans54: 'c', ans55: '1', // 5th Simplify
      ans56: '2', ans57: 'c', ans58: '1', ans59: 'c', ans60: '1', ans61: 'c', ans62: '1', ans63: '2', ans64: 'c', ans65: '1', // 6th Simplify
      ans66: '2', ans67: 'c', ans68: '1', ans69: 'c', ans70: '1', ans71: 'c', ans72: '1', ans73: '2', ans74: 'c', ans75: '1', // 7th Simplify
      ans76: '2', ans77: '2', ans78: 'c', ans79: '1', ans80: '2', ans81: 'c', ans82: '1' // Final Answer
    };

    // Check if all answers are correct
        let score = 0;
    score += this.lcd1 === correctAnswers.lcd1 ? 1 : 0;
    score += this.lcd2 === correctAnswers.lcd2 ? 1 : 0;
    score += this.lcd3 === correctAnswers.lcd3 ? 1 : 0;
    score += this.lcd4 === correctAnswers.lcd4 ? 1 : 0; // Check new LCD input
    score += this.lcd5 === correctAnswers.lcd5 ? 1 : 0; // Check new LCD input

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
    score += this.ans65 === correctAnswers.ans65 ? 1 : 0;
    score += this.ans66 === correctAnswers.ans66 ? 1 : 0;
    score += this.ans67 === correctAnswers.ans67 ? 1 : 0;
    score += this.ans68 === correctAnswers.ans68 ? 1 : 0;
    score += this.ans69 === correctAnswers.ans69 ? 1 : 0;
    score += this.ans70 === correctAnswers.ans70 ? 1 : 0;
    score += this.ans71 === correctAnswers.ans71 ? 1 : 0;
    score += this.ans72 === correctAnswers.ans72 ? 1 : 0;
    score += this.ans73 === correctAnswers.ans73 ? 1 : 0;
    score += this.ans74 === correctAnswers.ans74 ? 1 : 0;
    score += this.ans75 === correctAnswers.ans75 ? 1 : 0;
    score += this.ans76 === correctAnswers.ans76 ? 1 : 0;
    score += this.ans77 === correctAnswers.ans77 ? 1 : 0;
    score += this.ans78 === correctAnswers.ans78 ? 1 : 0;
    score += this.ans79 === correctAnswers.ans79 ? 1 : 0;
    score += this.ans80 === correctAnswers.ans80 ? 1 : 0;
    score += this.ans81 === correctAnswers.ans81 ? 1 : 0;
    score += this.ans82 === correctAnswers.ans82 ? 1 : 0;


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
              this.router.navigate(['/question3-7']); // Navigate to the next page if the answer is correct
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
    this.lcd1 = '';
    this.lcd2 = '';
    this.lcd3 = '';
    this.lcd4 = '';
    this.lcd5 = ''; // Reset new LCD input

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
    this.ans65 = '';
    this.ans66 = '';
    this.ans67 = '';
    this.ans68 = '';
    this.ans69 = '';
    this.ans70 = '';
    this.ans71 = '';
    this.ans72 = '';
    this.ans73 = '';
    this.ans74 = '';
    this.ans75 = '';
    this.ans76 = '';
    this.ans77 = '';
    this.ans78 = '';
    this.ans79 = '';
    this.ans80 = '';
    this.ans81 = '';
    this.ans82 = '';
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
 