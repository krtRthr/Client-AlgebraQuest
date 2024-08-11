import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question28Page } from './question2-8.page';

const routes: Routes = [
  {
    path: '',
    component: Question28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question28PageRoutingModule {}
