import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 
import { BackgroundMusicService } from '../background-music.service';

@Component({
  selector: 'app-level1',
  templateUrl: './level-1.page.html',
  styleUrls: ['./level-1.page.scss'],
})
export class Level1Page implements OnInit {
  // Default and new image sources
  constructor(private navCtrl: NavController,private musicService: BackgroundMusicService){}
  imageSrcs = [
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 49 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 50 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 51 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 52 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 53 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 54 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 55 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 56 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 57 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 58 (1).png',
  ];

  newImageSrcs = [
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 49 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 39 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 40 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 41 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 42 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 48 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 44 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 45 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 46 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 47 (1).png',
  ];

  currentImageSrcs: string[] = [...this.imageSrcs]; // Holds current displayed images
  buttonStates: boolean[] = [true, false, false, false, false, false, false, false, false, false];

  ngOnInit() {
    this.loadProgress();
    
  }

  // Change image and save progress
  changeImage(event: Event, buttonId: number) {
    if (this.buttonStates[buttonId - 1]) {
      // Update the image
      this.currentImageSrcs[buttonId - 1] = this.newImageSrcs[buttonId - 1];

      // Enable the next button
      if (buttonId < this.buttonStates.length) {
        this.buttonStates[buttonId] = true;
      }

      this.saveProgress();
    }
  }

  private saveProgress() {
    localStorage.setItem(
      'level1Progress',
      JSON.stringify({
        buttonStates: this.buttonStates,
        currentImageSrcs: this.currentImageSrcs,
      })
    );
  }

  // Load button states and images
  private loadProgress() {
    const savedProgress = localStorage.getItem('level1Progress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      this.buttonStates = progress.buttonStates || this.buttonStates;
      this.currentImageSrcs = progress.currentImageSrcs || this.imageSrcs;
    }
  }

  // Play sound effect
  playButton() {
    const audio = new Audio();
    audio.src = '../../assets/audio/button-124476.mp3';
    audio.load();
    audio.play();
  }
  revisitTutorial() {
    this.navCtrl.navigateForward('/tutorial1', { queryParams: { revisit: true } });
  }

  
}
