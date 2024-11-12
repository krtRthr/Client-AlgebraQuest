import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BackgroundMusicService } from './background-music.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  @ViewChild('backgroundMusic', { static: true }) backgroundMusic!: ElementRef<HTMLAudioElement>;

  constructor(private musicService: BackgroundMusicService) {}

  ngAfterViewInit() {
    // Initialize the audio element in the service
    this.musicService.initializeAudioElement(this.backgroundMusic.nativeElement);
  }
  background() {
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    if (audio) {
      audio.play();  
    }
  }
}
