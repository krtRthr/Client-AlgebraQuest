import { Component, OnDestroy, OnInit } from '@angular/core';
import { BackgroundMusicService } from '../background-music.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit,OnDestroy {

  constructor(public musicService: BackgroundMusicService) {}

  toggleSound(): void {
    this.musicService.toggleMute();
  }

  cardUnlocked: boolean[] = [true, false, false]; 

  ngOnInit() {
    this.loadCardState(); 
    
  }
  ngOnDestroy() {
  }
  // Check if a card is disabled
  isCardDisabled(cardIndex: number): boolean {
    return !this.cardUnlocked[cardIndex];
  }

  // Unlock the next card
  unlockCard(cardIndex: number) {
    if (cardIndex >= 0 && cardIndex < this.cardUnlocked.length - 1) {
      if (!this.cardUnlocked[cardIndex + 1]) {
        this.cardUnlocked[cardIndex + 1] = true;
        this.saveCardState(); // Save the updated state
      }
    }
  }

  // Save the cardUnlocked state to localStorage
  saveCardState() {
    localStorage.setItem('cardUnlocked', JSON.stringify(this.cardUnlocked));
  }

  // Load the cardUnlocked state from localStorage
  loadCardState() {
    const savedState = localStorage.getItem('cardUnlocked');
    if (savedState) {
      this.cardUnlocked = JSON.parse(savedState);
    }
  }

  // Play the button click sound
  playButton() {
    const audio = new Audio();
    audio.src = "../assets/audio/button-124476.mp3";
    audio.load();
    audio.play();
  }
}
