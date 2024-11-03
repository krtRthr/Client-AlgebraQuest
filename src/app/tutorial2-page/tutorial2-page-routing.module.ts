import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tutorial2PagePage } from './tutorial2-page.page';

const routes: Routes = [
  {
    path: '',
    component: Tutorial2PagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tutorial2PagePageRoutingModule {}
