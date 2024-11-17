import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialPage } from './tutorial1.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tutorial1PageRoutingModule {}
