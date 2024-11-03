import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tutorial1PagePage } from './tutorial1-page.page';

const routes: Routes = [
  {
    path: '',
    component: Tutorial1PagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tutorial1PagePageRoutingModule {}
