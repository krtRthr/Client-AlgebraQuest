import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tutorial3PagePageRoutingModule } from './tutorial3-page-routing.module';

import { Tutorial3PagePage } from './tutorial3-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tutorial3PagePageRoutingModule
  ],
  declarations: [Tutorial3PagePage]
})
export class Tutorial3PagePageModule {}
