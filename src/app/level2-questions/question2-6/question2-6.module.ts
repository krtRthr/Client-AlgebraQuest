import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question26PageRoutingModule } from './question2-6-routing.module';

import { Question26Page } from './question2-6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question26PageRoutingModule
  ],
  declarations: [Question26Page]
})
export class Question26PageModule {}
