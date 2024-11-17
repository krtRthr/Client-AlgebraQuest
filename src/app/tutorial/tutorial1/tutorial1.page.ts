import { AfterViewInit, Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BackgroundMusicService } from 'src/app/background-music.service';
@Component({
  selector: 'app-tutorial', // Generalized selector
  templateUrl: './tutorial1.page.html', // Generalized template
  styleUrls: ['./tutorial1.page.scss'],
})
export class TutorialPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('tutorialVideo', { static: false }) tutorialVideo!: ElementRef<HTMLVideoElement>;

  hasViewedTutorial = false;
  routerSubscription!: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private navCtrl: NavController,private backgroundMusicService:BackgroundMusicService ) {}

  ngOnInit() {
    this.checkIfFirstVisit();
    
    // Subscribe to router events to detect navigation to any other tutorial page
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/level-1') {
        this.stopVideo();
      }
    });
  }

  ngAfterViewInit() {
    const backButton = document.getElementById('back-button');
    backButton?.addEventListener('click', () => this.stopVideo());
  }

  ngOnDestroy() {
    // Unsubscribe from the router events to avoid memory leaks
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // Check if this is the first visit to the tutorial page
  checkIfFirstVisit() {
    const isRevisit = this.route.snapshot.queryParamMap.get('revisit') === 'true';
    const viewed = localStorage.getItem(`${this.tutorialVideo}Viewed`);

    if (!isRevisit && viewed) {
      this.hasViewedTutorial = true; // User has already viewed the tutorial
      this.router.navigate(['/level-1']); // Redirect to another page
    } else {
      localStorage.setItem(`${this.tutorialVideo}Viewed`, 'true'); // Mark tutorial as viewed
    }
  }

  // Method to stop the video
  stopVideo() {
    if (this.tutorialVideo && this.tutorialVideo.nativeElement) {
      const videoElement = this.tutorialVideo.nativeElement;
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  }

  // Play button sound effect
  playButton() {
    const audio = new Audio();
    audio.src = "../../../assets/audio/button-124476.mp3"; // Correct path to assets
    audio.load();
    audio.play();
  } 

  // Method to manually navigate back to this page from another page
  revisitTutorial() {
    this.navCtrl.navigateForward('/tutorial1', { queryParams: { revisit: true } });
  }
}
