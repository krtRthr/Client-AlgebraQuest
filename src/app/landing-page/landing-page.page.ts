import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage {
 
  /*
  imageSrc1 = '../../assets/AlgebraQuest_Asset/level 2 card unlocked.png';
  imageSrc2 = '../../assets/AlgebraQuest_Asset/level 3 card unlocked.png';

  newImageSrc1 = '../../assets/AlgebraQuest_Asset/level 2 card (1).png';
  newImageSrc2 = '../../assets/AlgebraQuest_Asset/LEVEL 3 CARD (1).png';

  changeImage(event: Event, buttonId: number) {  
    const target = event.target as HTMLImageElement;
    switch (buttonId) {
      case 1:
        target.src = this.newImageSrc1;
        break;
      case 2:
        target.src = this.newImageSrc2;
        break;
      default:
        break;
    }
  }*/

  cardUnlocked = [true, false, false]; 


  isCardDisabled(cardIndex: number): boolean {
    return !this.cardUnlocked[cardIndex];
  }

  unlockCard(cardIndex: number) {
    if (cardIndex >= 0 && cardIndex < this.cardUnlocked.length - 1) { 
      this.cardUnlocked[cardIndex + 1] = true; 
    }
  }

  playButton(){
    let audio = new Audio();
    audio.src = "../assets/audio/button-124476.mp3";
    audio.load();
    audio.play();
   }  
  
}
