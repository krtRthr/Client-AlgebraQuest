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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
