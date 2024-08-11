import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question24Page } from './question2-4.page';

const routes: Routes = [
  {
    path: '',
    component: Question24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question24PageRoutingModule {}
