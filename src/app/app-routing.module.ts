import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'level-1',
    loadChildren: () => import('./level-1/level-1.module').then( m => m.Level1PageModule)
  },
  {
    path: 'level-2',
    loadChildren: () => import('./level-2/level-2.module').then( m => m.Level2PageModule)
  },
  {
    path: 'level-3',
    loadChildren: () => import('./level-3/level-3.module').then( m => m.Level3PageModule)
  },
  {
    path: 'question1',
    loadChildren: () => import('./level1-questions/question1/question1.module').then( m => m.Question1PageModule)
  },
  {
    path: 'question2',
    loadChildren: () => import('./level1-questions/question2/question2.module').then( m => m.Question2PageModule)
  },
  {
    path: 'question3',
    loadChildren: () => import('./level1-questions/question3/question3.module').then( m => m.Question3PageModule)
  },
  {
    path: 'question4',
    loadChildren: () => import('./level1-questions/question4/question4.module').then( m => m.Question4PageModule)
  },
  {
    path: 'question5',
    loadChildren: () => import('./level1-questions/question5/question5.module').then( m => m.Question5PageModule)
  },
  {
    path: 'question6',
    loadChildren: () => import('./level1-questions/question6/question6.module').then( m => m.Question6PageModule)
  },
  {
    path: 'question7',
    loadChildren: () => import('./level1-questions/question7/question7.module').then( m => m.Question7PageModule)
  },
  {
    path: 'question8',
    loadChildren: () => import('./level1-questions/question8/question8.module').then( m => m.Question8PageModule)
  },
  {
    path: 'question9',
    loadChildren: () => import('./level1-questions/question9/question9.module').then( m => m.Question9PageModule)
  },
  {
    path: 'question10',
    loadChildren: () => import('./level1-questions/question10/question10.module').then( m => m.Question10PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
