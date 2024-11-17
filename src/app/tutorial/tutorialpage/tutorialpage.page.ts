import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 
import { BackgroundMusicService } from '../../background-music.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tutorialpage',
  templateUrl: './tutorialpage.page.html',
  styleUrls: ['./tutorialpage.page.scss'],
})
export class TutorialpagePage implements OnInit {

  ngOnInit(){}
  
  settings = {
    sound: false,
    music: 0 
  };
  private audio: HTMLAudioElement;
  constructor(private navCtrl: NavController, private musicService: BackgroundMusicService, private router: Router) {
    
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

  revisitTutorial(tutorial: string) {
    this.router.navigate([`/${tutorial}`], { queryParams: { revisit: true } });
  }
}
