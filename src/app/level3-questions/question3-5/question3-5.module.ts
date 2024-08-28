import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question35PageRoutingModule } from './question3-5-routing.module';

import { Question35Page } from './question3-5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question35PageRoutingModule
  ],
  declarations: [Question35Page]
})
export class Question35PageModule {}
