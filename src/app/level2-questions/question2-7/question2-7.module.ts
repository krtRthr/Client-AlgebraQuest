import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question27PageRoutingModule } from './question2-7-routing.module';

import { Question27Page } from './question2-7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question27PageRoutingModule
  ],
  declarations: [Question27Page]
})
export class Question27PageModule {}
