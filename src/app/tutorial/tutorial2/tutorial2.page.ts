import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tutorial2',
  templateUrl: './tutorial2.page.html',
  styleUrls: ['./tutorial2.page.scss'],
})
export class Tutorial2Page implements OnInit, AfterViewInit,OnDestroy {
@ViewChild('tutorialVideo2', { static: false }) tutorialVideo!: ElementRef<HTMLVideoElement>;

hasViewedTutorial = false;
routerSubscription!: Subscription;

constructor(private router: Router, private route: ActivatedRoute, private navCtrl: NavController ) {}

 ngOnInit() {
    this.checkIfFirstVisit();
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/level-2') {
        this.stopVideo();
      }
    });
  }

  ngAfterViewInit() {
    const backButton = document.getElementById('back-button');
    backButton?.addEventListener('click', () => this.stopVideo());
  }

  checkIfFirstVisit() {
    const isRevisit = this.route.snapshot.queryParamMap.get('revisit') === 'true';
    const viewed = localStorage.getItem('tutorial2Viewed');

    if (!isRevisit && viewed) {
      this.hasViewedTutorial = true; // User has already viewed the tutorial
      this.router.navigate(['/level-2']); // Redirect to another page
    } else {
      localStorage.setItem('tutorial2Viewed', 'true'); // Mark tutorial as viewed
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
  stopVideo() {
    if (this.tutorialVideo && this.tutorialVideo.nativeElement) {
      const videoElement = this.tutorialVideo.nativeElement;
      videoElement.pause(); // Pause the video
      videoElement.currentTime = 0; // Reset video to the start
    }
  }

  playButton(){
    let audio = new Audio();
    audio.src = "../assets/audio/button-124476.mp3";
    audio.load();
    audio.play();
  }
  revisitTutorial() {
    this.navCtrl.navigateForward('/tutorial2', { queryParams: { revisit: true } });
  }
}
