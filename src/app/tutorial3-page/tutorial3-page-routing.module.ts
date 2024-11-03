import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tutorial3PagePage } from './tutorial3-page.page';

const routes: Routes = [
  {
    path: '',
    component: Tutorial3PagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tutorial3PagePageRoutingModule {}
