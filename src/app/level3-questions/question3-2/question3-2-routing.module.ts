import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question32Page } from './question3-2.page';

const routes: Routes = [
  {
    path: '',
    component: Question32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question32PageRoutingModule {}
