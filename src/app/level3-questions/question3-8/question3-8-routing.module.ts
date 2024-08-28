import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question38Page } from './question3-8.page';

const routes: Routes = [
  {
    path: '',
    component: Question38Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question38PageRoutingModule {}
