import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question23Page } from './question2-3.page';

const routes: Routes = [
  {
    path: '',
    component: Question23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question23PageRoutingModule {}
