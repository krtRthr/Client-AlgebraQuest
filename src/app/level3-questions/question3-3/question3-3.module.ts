import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question33PageRoutingModule } from './question3-3-routing.module';

import { Question33Page } from './question3-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question33PageRoutingModule
  ],
  declarations: [Question33Page]
})
export class Question33PageModule {}
