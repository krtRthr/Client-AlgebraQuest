import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundMusicService {

  private audioElement: HTMLAudioElement | null = null;

  // Initialize the audio element, typically called from app.component.ts
  initializeAudioElement(audioElement: HTMLAudioElement) {
    this.audioElement = audioElement;
  }

  // Method to play music
  playMusic() {
    if (this.audioElement) {
      this.audioElement.play().catch(error => console.error('Error playing music:', error));
    }
  }

  // Method to pause and stop music
  stopMusic() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0; // Optionally reset to the start
    }
  }
}
