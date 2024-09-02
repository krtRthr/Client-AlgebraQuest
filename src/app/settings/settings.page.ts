import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
  export class SettingsPage {

    settings = {
      sound: true,
      music: true
    };
  
    constructor(private navCtrl: NavController) {}
  
    close() {
      this.navCtrl.back();
    }
  
  
  }