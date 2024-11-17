import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tutorial1PageRoutingModule } from './tutorial1-routing.module';

import { TutorialPage } from './tutorial1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tutorial1PageRoutingModule
  ],
  declarations: [TutorialPage]
})
export class Tutorial1PageModule {}
