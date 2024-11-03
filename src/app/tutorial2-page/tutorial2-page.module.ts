import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tutorial2PagePageRoutingModule } from './tutorial2-page-routing.module';

import { Tutorial2PagePage } from './tutorial2-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tutorial2PagePageRoutingModule
  ],
  declarations: [Tutorial2PagePage]
})
export class Tutorial2PagePageModule {}
