import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question27Page } from './question2-7.page';

const routes: Routes = [
  {
    path: '',
    component: Question27Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question27PageRoutingModule {}
