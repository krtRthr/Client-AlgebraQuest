import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';
@Component({
  selector: 'app-final-score',
  templateUrl: './final-score.page.html',
  styleUrls: ['./final-score.page.scss'],
})
export class FinalScorePage implements OnInit {

  finalScore: number = 0;
  constructor(private scoreService : ScoreService) { }

  ngOnInit() {
    this.finalScore = this.scoreService.getScore();
  }

  resetGame() {
    this.scoreService.resetScore();  // Reset the score for a new game
  }
  playButton(){
    let audio = new Audio();
    audio.src = "../assets/audio/button-124476.mp3";
    audio.load();
    audio.play();
   }
  resultWin(){
   let audio = new Audio();
   audio.src = "../assets/audio/you-win.mp3"
    audio.load();
    audio.play();
  }
}
