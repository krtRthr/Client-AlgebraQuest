import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question29PageRoutingModule } from './question2-9-routing.module';

import { Question29Page } from './question2-9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question29PageRoutingModule
  ],
  declarations: [Question29Page]
})
export class Question29PageModule {}
