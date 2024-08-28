import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question37PageRoutingModule } from './question3-7-routing.module';

import { Question37Page } from './question3-7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question37PageRoutingModule
  ],
  declarations: [Question37Page]
})
export class Question37PageModule {}
