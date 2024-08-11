import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question26Page } from './question2-6.page';

const routes: Routes = [
  {
    path: '',
    component: Question26Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question26PageRoutingModule {}
