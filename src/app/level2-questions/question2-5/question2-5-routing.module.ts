import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question25Page } from './question2-5.page';

const routes: Routes = [
  {
    path: '',
    component: Question25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question25PageRoutingModule {}
