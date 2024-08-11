import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question21PageRoutingModule } from './question2-1-routing.module';

import { Question21Page } from './question2-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question21PageRoutingModule
  ],
  declarations: [Question21Page]
})
export class Question21PageModule {}
