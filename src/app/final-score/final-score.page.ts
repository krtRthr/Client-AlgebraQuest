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
}
