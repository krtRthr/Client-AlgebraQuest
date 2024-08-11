import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question33Page } from './question3-3.page';

const routes: Routes = [
  {
    path: '',
    component: Question33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question33PageRoutingModule {}
