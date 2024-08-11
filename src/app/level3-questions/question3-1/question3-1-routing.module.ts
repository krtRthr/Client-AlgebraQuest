import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question31Page } from './question3-1.page';

const routes: Routes = [
  {
    path: '',
    component: Question31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question31PageRoutingModule {}
