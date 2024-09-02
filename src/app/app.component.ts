import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {
    
  }
  background() {
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    if (audio) {
      audio.play();  
    }
  }
}
