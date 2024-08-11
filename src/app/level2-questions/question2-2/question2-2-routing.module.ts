import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question22Page } from './question2-2.page';

const routes: Routes = [
  {
    path: '',
    component: Question22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question22PageRoutingModule {}
