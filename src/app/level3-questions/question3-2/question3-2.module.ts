import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question32PageRoutingModule } from './question3-2-routing.module';

import { Question32Page } from './question3-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question32PageRoutingModule
  ],
  declarations: [Question32Page]
})
export class Question32PageModule {}
