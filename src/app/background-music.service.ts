import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackgroundMusicService {
  private audio: HTMLAudioElement | null = null;
  private isMutedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isMuted$ = this.isMutedSubject.asObservable(); // Expose as observable

  constructor() {
    this.audio = new Audio();
    this.audio.src = 'assets/audio/background.mp3'; // Path to your audio file
    this.audio.loop = true; // Enable looping for continuous playback
  }

  playMusic() {
    if (this.audio && !this.isMutedSubject.getValue()) {
      this.audio.play();
    }
  }

  stopMusic() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0; // Reset to the beginning
    }
  }

  toggleMute() {
    const isMuted = !this.isMutedSubject.getValue();
    this.isMutedSubject.next(isMuted);

    if (isMuted) {
      this.stopMusic();
    } else {
      this.playMusic();
    }
  }

  isMuted(): boolean {
    return this.isMutedSubject.getValue();
  }
}
