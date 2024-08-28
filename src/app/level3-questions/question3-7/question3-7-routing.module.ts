import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question37Page } from './question3-7.page';

const routes: Routes = [
  {
    path: '',
    component: Question37Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question37PageRoutingModule {}
