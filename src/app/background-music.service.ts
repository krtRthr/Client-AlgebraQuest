import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundMusicService {
  private audio: HTMLAudioElement | null = null;

  constructor() {
    this.audio = new Audio();
    this.audio.src = 'assets/audio/background.mp3'; // Path to your audio file
    this.audio.loop = true; // Enable looping for continuous playback
  }
 
  playMusic() {
    if (this.audio) {
      this.audio.play();
    }
  }

  stopMusic() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0; // Reset to the beginning
    }
  }
}
