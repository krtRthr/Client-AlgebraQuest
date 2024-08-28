import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question38PageRoutingModule } from './question3-8-routing.module';

import { Question38Page } from './question3-8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question38PageRoutingModule
  ],
  declarations: [Question38Page]
})
export class Question38PageModule {}
