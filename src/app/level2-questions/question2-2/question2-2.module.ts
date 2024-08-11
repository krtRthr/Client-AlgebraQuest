import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question22PageRoutingModule } from './question2-2-routing.module';

import { Question22Page } from './question2-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question22PageRoutingModule
  ],
  declarations: [Question22Page]
})
export class Question22PageModule {}
