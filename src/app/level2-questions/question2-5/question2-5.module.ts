import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question25PageRoutingModule } from './question2-5-routing.module';

import { Question25Page } from './question2-5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question25PageRoutingModule
  ],
  declarations: [Question25Page]
})
export class Question25PageModule {}
