import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question36Page } from './question3-6.page';

const routes: Routes = [
  {
    path: '',
    component: Question36Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question36PageRoutingModule {}
