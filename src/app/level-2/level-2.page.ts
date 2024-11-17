import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-level2',
  templateUrl: './level-2.page.html',
  styleUrls: ['./level-2.page.scss'],
})
export class Level2Page implements OnInit {
  // Initial image sources for each button
  constructor(private navCtrl: NavController){}

  imageSrcs = [ 
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/2 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/2-1 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/2-2 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/2-3 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/2-4 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/2-5 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/2-6 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/2-7 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/2-8 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/2-9 (1).png'
  ];
  
  newImageSrcs= [
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/2 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/Group 39 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/Group 40 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/Group 41 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/Group 42 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/Group 48 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/Group 44 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/Group 45 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/Group 46 (1).png',
    '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl2-buttons/Group 47 (1).png'
  ];

  currentImageSrcs: string[] = [...this.imageSrcs]; // Holds current displayed images

  buttonStates: boolean[] = [true, false, false, false, false, false, false, false, false, false];

  ngOnInit() {
    this.loadProgress(); // Load progress on initialization
  }

  changeImage(event: Event, buttonId: number) {
    if (this.buttonStates[buttonId - 1]) {
      const target = event.target as HTMLImageElement;

      // Update the DOM image and the currentImageSrcs array
      target.src = this.newImageSrcs[buttonId - 1];
      this.currentImageSrcs[buttonId - 1] = this.newImageSrcs[buttonId - 1];

      // Enable the next button, if any
      if (buttonId < this.buttonStates.length) {
        this.buttonStates[buttonId] = true;
      }

      this.saveProgress(); // Save progress after updating the image
    }
  }

  private saveProgress() {
    // Save button states and current images
    localStorage.setItem(
      'level2Progress',
      JSON.stringify({
        buttonStates: this.buttonStates,
        currentImageSrcs: this.currentImageSrcs,
      })
    );
  }

  private loadProgress() {
    // Load button states and current images
    const savedProgress = localStorage.getItem('level2Progress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      this.buttonStates = progress.buttonStates || this.buttonStates;
      this.currentImageSrcs = progress.currentImageSrcs || this.imageSrcs;

      // Apply the loaded images to the DOM
      setTimeout(() => {
        const buttons = document.querySelectorAll('.image-button');
        buttons.forEach((button, index) => {
          const img = button as HTMLImageElement;
          img.src = this.currentImageSrcs[index];
        });
      });
    }
  }

  playButton() {
    const audio = new Audio();
    audio.src = "../assets/audio/button-124476.mp3";
    audio.load();
    audio.play();
  }
  revisitTutorial() {
    this.navCtrl.navigateForward('/tutorial2', { queryParams: { revisit: true } });
  }
}
