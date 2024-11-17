import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-level-3',
  templateUrl: './level-3.page.html',
  styleUrls: ['./level-3.page.scss'],
})
export class Level3Page implements OnInit { 
  constructor(private navCtrl: NavController){}

imageSrcs=[ 
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/on-level1.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/close-level2.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/close-level3.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/close-level4.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/close-level5.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/close-level6.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/close-level7.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/close-level8.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/close-level9.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/close-level10.png'
];

 newImageSrcs=[ 
  '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/on-level1.png',
 '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/on-level2.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/on-level3.png',
 '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/on-level4.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/on-level5.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/on-level6.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/on-level7.png',
 '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/on-level8.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/on-level9.png',
'../../assets/AlgebraQuest_Asset/lvl-buttons/lvl3-buttons/on-level10.png'
];


currentImageSrcs: string[] = [...this.imageSrcs]; // Holds current displayed images
 buttonStates: boolean[] = [true, false, false, false, false, false, false, false, false, false];
 ngOnInit() {
  this.loadProgress();
}
 // Change image when button is clicked
 changeImage(event: Event, buttonId: number) {
   const target = event.target as HTMLImageElement;
   if (this.buttonStates[buttonId - 1]) {
     // Update the image
     this.currentImageSrcs[buttonId - 1] = this.newImageSrcs[buttonId - 1];

     // Enable the next button, if any
     if (buttonId < this.buttonStates.length) {
       this.buttonStates[buttonId] = true;
     }
     this.saveProgress();
   }
 }
 private saveProgress() {
  localStorage.setItem(
    'level3Progress',
    JSON.stringify({
      buttonStates: this.buttonStates,
      currentImageSrcs: this.currentImageSrcs,
    })
  );
}

// Load button states and images
private loadProgress() {
  const savedProgress = localStorage.getItem('level3Progress');
  if (savedProgress) {
    const progress = JSON.parse(savedProgress);
    this.buttonStates = progress.buttonStates || this.buttonStates;
    this.currentImageSrcs = progress.currentImageSrcs || this.imageSrcs;
  }
}
  playButton(){
    let audio = new Audio();
    audio.src = "../assets/audio/button-124476.mp3";
    audio.load();
    audio.play();
   }
   revisitTutorial() {
    this.navCtrl.navigateForward('/tutorial3', { queryParams: { revisit: true } });
  }
}
