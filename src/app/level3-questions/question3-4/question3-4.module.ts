import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question34PageRoutingModule } from './question3-4-routing.module';

import { Question34Page } from './question3-4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question34PageRoutingModule
  ],
  declarations: [Question34Page]
})
export class Question34PageModule {}
