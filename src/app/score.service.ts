import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private score: number = 0;

  constructor() { }

  addScore(points: number) {
    this.score += points;
    console.log(`Score updated: ${this.score}`);
  }
  
  incrementScore() {
    this.score += 1;
  }

  getScore(): number {
    return this.score;
  }

  resetScore() {
    this.score = 0;
  }
}
