import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  settings = {
    sound: true,
    music: 100 
  };
  private audio: HTMLAudioElement;
  constructor(private navCtrl: NavController) {
    
    this.audio = new Audio();
    this.audio.src = '../assets/audio/background.mp3'; // Update path as needed
    this.audio.loop = true; // Optional: Set to loop if desired
    this.audio.volume = this.settings.music / 100; // Set initial volume
    this.audio.play(); // Start playing audio
  }

  close() {
    this.navCtrl.back();
  }

  onSoundChange(event: CustomEvent) {
    this.settings.sound = event.detail.checked;
    if (this.settings.sound) {
      this.audio.play(); 
    } else {
      this.audio.pause(); 
    }
  }

  onMusicChange(event: CustomEvent) {
    this.settings.music = event.detail.value;
    this.audio.volume = this.settings.music / 100; 
  }

  playButton(){
    let audio = new Audio();
    audio.src = "../assets/audio/button-124476.mp3";
    audio.load();
    audio.play();
  }
}