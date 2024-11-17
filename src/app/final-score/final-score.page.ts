import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-final-score',
  templateUrl: './final-score.page.html',
  styleUrls: ['./final-score.page.scss'],
})
export class FinalScorePage implements OnInit, AfterViewInit {
  finalScore: number = 0;

  constructor(private scoreService: ScoreService) {}

  ngOnInit() {
    this.finalScore = this.scoreService.getScore();
  }

  ngAfterViewInit() {
    this.startSVGConfetti(); // Start confetti when the page loads
  }

  resetGame() {
    this.scoreService.resetScore(); // Reset the score for a new game
  }

  playButton() {
    const audio = new Audio();
    audio.src = '../assets/audio/button-124476.mp3';
    audio.load();
    audio.play();
  }

  startSVGConfetti() {
    const svg = document.getElementById('confettiSVG') as SVGSVGElement | null;

  if (!svg) {
  console.error('SVG element not found!');
  return;
}
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFFF33'];

    for (let i = 0; i < 50; i++) {
      // Create an SVG rectangle (confetti piece)
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('width', '10');
      rect.setAttribute('height', '10');
      rect.setAttribute('fill', colors[Math.floor(Math.random() * colors.length)]);
      rect.setAttribute('x', `${Math.random() * window.innerWidth}`);
      rect.setAttribute('y', `${-50}`); // Start above the screen

      // Append to SVG container
      svg.appendChild(rect);

      // Animate the rectangle
      const duration = Math.random() * 3000 + 2000; // Random duration between 2s and 5s
      const xEnd = Math.random() * window.innerWidth;
      const yEnd = window.innerHeight;

      rect.animate(
        [
          {
            transform: `translate(0, 0) rotate(${Math.random() * 360}deg)`,
          },
          {
            transform: `translate(${xEnd}px, ${yEnd}px) rotate(${Math.random() * 720}deg)`,
          },
        ],
        {
          duration,
          easing: 'ease-out',
          fill: 'forwards',
        }
      );

      // Remove confetti after animation ends
      setTimeout(() => {
        rect.remove();
      }, duration);
    }
  }
}
