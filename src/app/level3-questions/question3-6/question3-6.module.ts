import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question36PageRoutingModule } from './question3-6-routing.module';

import { Question36Page } from './question3-6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question36PageRoutingModule
  ],
  declarations: [Question36Page]
})
export class Question36PageModule {}
