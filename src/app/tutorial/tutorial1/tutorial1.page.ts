import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorial1',
  templateUrl: './tutorial1.page.html',
  styleUrls: ['./tutorial1.page.scss'],
})
export class Tutorial1Page implements OnInit {

  ngOnInit(){}

  @ViewChild('tutorialVideo', { static: false }) tutorialVideo!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    const backButton = document.getElementById('back-button');
    backButton?.addEventListener('click', () => this.stopVideo());
  }

  stopVideo() {
    if (this.tutorialVideo && this.tutorialVideo.nativeElement) {
      this.tutorialVideo.nativeElement.pause();
    }
  }

  playButton(){
    let audio = new Audio();
    audio.src = "../assets/audio/button-124476.mp3";
    audio.load();
    audio.play();
  }
}
