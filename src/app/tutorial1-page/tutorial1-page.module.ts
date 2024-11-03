import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tutorial1PagePageRoutingModule } from './tutorial1-page-routing.module';

import { Tutorial1PagePage } from './tutorial1-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tutorial1PagePageRoutingModule
  ],
  declarations: [Tutorial1PagePage]
})
export class Tutorial1PagePageModule {}
