import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question39PageRoutingModule } from './question3-9-routing.module';

import { Question39Page } from './question3-9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question39PageRoutingModule
  ],
  declarations: [Question39Page]
})
export class Question39PageModule {}
