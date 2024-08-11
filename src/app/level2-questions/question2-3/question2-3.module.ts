import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question23PageRoutingModule } from './question2-3-routing.module';

import { Question23Page } from './question2-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question23PageRoutingModule
  ],
  declarations: [Question23Page]
})
export class Question23PageModule {}
