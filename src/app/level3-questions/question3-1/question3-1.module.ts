import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question31PageRoutingModule } from './question3-1-routing.module';

import { Question31Page } from './question3-1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question31PageRoutingModule
  ],
  declarations: [Question31Page]
})
export class Question31PageModule {}
