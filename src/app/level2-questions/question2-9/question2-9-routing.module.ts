import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question29Page } from './question2-9.page';

const routes: Routes = [
  {
    path: '',
    component: Question29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question29PageRoutingModule {}
