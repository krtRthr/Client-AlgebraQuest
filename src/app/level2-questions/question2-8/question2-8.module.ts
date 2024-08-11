import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question28PageRoutingModule } from './question2-8-routing.module';

import { Question28Page } from './question2-8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question28PageRoutingModule
  ],
  declarations: [Question28Page]
})
export class Question28PageModule {}
