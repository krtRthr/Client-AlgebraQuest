import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Questions210PageRoutingModule } from './questions2-10-routing.module';

import { Questions210Page } from './questions2-10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Questions210PageRoutingModule
  ],
  declarations: [Questions210Page]
})
export class Questions210PageModule {}
