import { Component, OnDestroy } from '@angular/core';
import { BackgroundMusicService } from './background-music.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy {
  private routerSubscription: Subscription;
  private isMutedSubscription: Subscription;
  private musicStopRoutes: string[] = [
    '/tutorialpage',
    '/tutorial1',
    '/tutorial2',
    '/tutorial3',
    '/final-score',
  ];

  constructor(private router: Router, private musicService: BackgroundMusicService) {
    // React to route changes to manage music
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url.split('?')[0].toLowerCase(); // Ignore query params and normalize case
        const isMusicStopRoute = this.musicStopRoutes.some(
          (route) => route.toLowerCase() === currentUrl || `${route}/` === currentUrl
        );
        if (isMusicStopRoute) {
          this.musicService.stopMusic();
        } else {
          this.musicService.playMusic();
        }
      }
    });

    // React to mute state changes to stop music globally
    this.isMutedSubscription = this.musicService.isMuted$.subscribe((isMuted) => {
      if (isMuted) {
        this.musicService.stopMusic();
      } else {
        this.musicService.playMusic();
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.isMutedSubscription.unsubscribe();
  }
}
