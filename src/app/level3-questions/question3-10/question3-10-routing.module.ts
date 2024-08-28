import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question310Page } from './question3-10.page';

const routes: Routes = [
  {
    path: '',
    component: Question310Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question310PageRoutingModule {}
