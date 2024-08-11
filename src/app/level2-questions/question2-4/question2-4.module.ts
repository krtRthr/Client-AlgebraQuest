import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question24PageRoutingModule } from './question2-4-routing.module';

import { Question24Page } from './question2-4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question24PageRoutingModule
  ],
  declarations: [Question24Page]
})
export class Question24PageModule {}
