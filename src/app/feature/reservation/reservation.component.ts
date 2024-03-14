import { Component, ElementRef, ViewChild, HostListener  } from '@angular/core';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  @ViewChild('VidCompro') videoPlayer!: ElementRef<HTMLVideoElement>;
  private wasVideoPlaying = false;
  constructor() { }

  ngOnInit() {
    document.addEventListener('visibilitychange', this.visibilityChangeHandler.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('visibilitychange', this.visibilityChangeHandler.bind(this));
  }

  visibilityChangeHandler() {
    if (document.visibilityState === 'hidden') {
      this.wasVideoPlaying = !this.videoPlayer.nativeElement.paused;
      this.videoPlayer.nativeElement.pause(); // Menghentikan video saat tab menjadi tidak terlihat
    } else if (document.visibilityState === 'visible' && this.wasVideoPlaying) {
      this.videoPlayer.nativeElement.play(); // Memulai kembali video jika tab menjadi terlihat dan video sebelumnya sedang diputar
    }
  }

  ngAfterViewInit() {
    this.videoPlayer.nativeElement.volume = 0.2; 
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          this.videoPlayer.nativeElement.pause();
        } else {
          this.videoPlayer.nativeElement.play();
        }
      });
    });
  
    observer.observe(this.videoPlayer.nativeElement);
  }
}
