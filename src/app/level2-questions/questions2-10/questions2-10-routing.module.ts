import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Questions210Page } from './questions2-10.page';

const routes: Routes = [
  {
    path: '',
    component: Questions210Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Questions210PageRoutingModule {}
