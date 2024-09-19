import { Component } from '@angular/core';

@Component({
  selector: 'app-level1',
  templateUrl: './level-1.page.html',
  styleUrls: ['./level-1.page.scss'],
})
export class Level1Page {
  // Initial image sources for each button
  imageSrc1 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 49 (1).png';
  imageSrc2 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 50 (1).png';
  imageSrc3 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 51 (1).png';
  imageSrc4 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 52 (1).png';
  imageSrc5 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 53 (1).png';
  imageSrc6 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 54 (1).png';
  imageSrc7 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 55 (1).png';
  imageSrc8 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 56 (1).png';
  imageSrc9 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 57 (1).png';
  imageSrc10 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 58 (1).png';

  // New images for the buttons when clicked
  newImageSrc1 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 49 (1).png';
  newImageSrc2 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 39 (1).png';
  newImageSrc3 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 40 (1).png';
  newImageSrc4 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 41 (1).png';
  newImageSrc5 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 42 (1).png';
  newImageSrc6 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 48 (1).png';
  newImageSrc7 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 44 (1).png';
  newImageSrc8 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 45 (1).png';
  newImageSrc9 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 46 (1).png';
  newImageSrc10 = '../../assets/AlgebraQuest_Asset/lvl-buttons/lvl1-buttons/Group 47 (1).png';

  
  changeImage(event: Event, buttonId: number) {  
    const target = event.target as HTMLImageElement;
    switch (buttonId) {
      case 1:
        target.src = this.newImageSrc1;
        break;
      case 2:
        target.src = this.newImageSrc2;
        break;
      case 3:
        target.src = this.newImageSrc3;
        break;
      case 4:
        target.src = this.newImageSrc4;
        break;
      case 5:
        target.src = this.newImageSrc5;
        break;
      case 6:
        target.src = this.newImageSrc6;
        break;
      case 7:
        target.src = this.newImageSrc7;
        break;
      case 8:
        target.src = this.newImageSrc8;
        break;
      case 9:
        target.src = this.newImageSrc9;
        break;
      case 10:
        target.src = this.newImageSrc10;
        break;
      default:
        break;
    }
  }

  playButton(){
    let audio = new Audio();
    audio.src = "../assets/audio/button-124476.mp3";
    audio.load();
    audio.play();
   }
  
}


