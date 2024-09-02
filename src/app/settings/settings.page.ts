import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
  export class SettingsPage {

    playButton(){
      let audio = new Audio();
      audio.src = "../assets/audio/button-124476.mp3";
      audio.load();
      audio.play();
    }

  
  }