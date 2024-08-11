import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question21Page } from './question2-1.page';

const routes: Routes = [
  {
    path: '',
    component: Question21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question21PageRoutingModule {}
