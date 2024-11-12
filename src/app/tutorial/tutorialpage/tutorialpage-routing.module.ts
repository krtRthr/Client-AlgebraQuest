import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialpagePage } from './tutorialpage.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialpagePageRoutingModule {}
