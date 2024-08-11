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
  {
    path: 'question2-1',
    loadChildren: () => import('./level2-questions/question2-1/question2-1.module').then( m => m.Question21PageModule)
  },
  {
    path: 'question2-2',
    loadChildren: () => import('./level2-questions/question2-2/question2-2.module').then( m => m.Question22PageModule)
  },
  {
    path: 'question2-3',
    loadChildren: () => import('./level2-questions/question2-3/question2-3.module').then( m => m.Question23PageModule)
  },
  {
    path: 'question2-4',
    loadChildren: () => import('./level2-questions/question2-4/question2-4.module').then( m => m.Question24PageModule)
  },
  {
    path: 'question2-5',
    loadChildren: () => import('./level2-questions/question2-5/question2-5.module').then( m => m.Question25PageModule)
  },
  {
    path: 'question2-6',
    loadChildren: () => import('./level2-questions/question2-6/question2-6.module').then( m => m.Question26PageModule)
  },
  {
    path: 'question2-7',
    loadChildren: () => import('./level2-questions/question2-7/question2-7.module').then( m => m.Question27PageModule)
  },
  {
    path: 'question2-8',
    loadChildren: () => import('./level2-questions/question2-8/question2-8.module').then( m => m.Question28PageModule)
  },
  {
    path: 'question2-9',
    loadChildren: () => import('./level2-questions/question2-9/question2-9.module').then( m => m.Question29PageModule)
  },
  {
    path: 'question2-10',
    loadChildren: () => import('./level2-questions/questions2-10/questions2-10.module').then( m => m.Questions210PageModule)
  },
  {
    path: 'question3-1',
    loadChildren: () => import('./level3-questions/question3-1/question3-1.module').then( m => m.Question31PageModule)
  },
  {
    path: 'question3-2',
    loadChildren: () => import('./level3-questions/question3-2/question3-2.module').then( m => m.Question32PageModule)
  },
  {
    path: 'question3-3',
    loadChildren: () => import('./level3-questions/question3-3/question3-3.module').then( m => m.Question33PageModule)
  },
  {
    path: 'question3-4',
    loadChildren: () => import('./level3-questions/question3-4/question3-4.module').then( m => m.Question34PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
