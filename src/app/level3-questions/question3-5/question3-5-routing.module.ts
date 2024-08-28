import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question35Page } from './question3-5.page';

const routes: Routes = [
  {
    path: '',
    component: Question35Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question35PageRoutingModule {}
