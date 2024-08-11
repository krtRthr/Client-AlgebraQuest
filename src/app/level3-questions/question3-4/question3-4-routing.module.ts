import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question34Page } from './question3-4.page';

const routes: Routes = [
  {
    path: '',
    component: Question34Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question34PageRoutingModule {}
