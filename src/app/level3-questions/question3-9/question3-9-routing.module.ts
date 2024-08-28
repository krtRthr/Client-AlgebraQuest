import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question39Page } from './question3-9.page';

const routes: Routes = [
  {
    path: '',
    component: Question39Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question39PageRoutingModule {}
