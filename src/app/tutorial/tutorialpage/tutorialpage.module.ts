import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialpagePageRoutingModule } from './tutorialpage-routing.module';

import { TutorialpagePage } from './tutorialpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialpagePageRoutingModule
  ],
  declarations: [TutorialpagePage]
})
export class TutorialpagePageModule {}
