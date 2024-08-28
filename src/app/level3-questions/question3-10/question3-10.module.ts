import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question310PageRoutingModule } from './question3-10-routing.module';

import { Question310Page } from './question3-10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question310PageRoutingModule
  ],
  declarations: [Question310Page]
})
export class Question310PageModule {}
