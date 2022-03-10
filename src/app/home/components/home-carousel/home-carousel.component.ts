import { Component, OnInit } from '@angular/core';
import { HomeCarousel } from 'src/app/shared/Models/carousel';
import { CarouselService } from 'src/app/shared/services/carousel.service';
import Swiper, { Autoplay, EffectFade, SwiperOptions } from 'swiper';

Swiper.use([Autoplay, EffectFade]);

@Component({
  selector: 'home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
})
export class HomeCarouselComponent implements OnInit {
  carouselSlides?: HomeCarousel[];
  error: Error | null = null;
  loading = false;
  swiperConfig: SwiperOptions = {
    effect: 'fade',
    loop: true,
    speed: 750,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.loading = true;
    this.carouselService.getHomeCarousel().subscribe({
      next: this.handleSuccess.bind(this),
      error: this.handleError.bind(this),
    });
  }

  private handleSuccess(slides: HomeCarousel[]) {
    this.carouselSlides = slides;
    this.error = null;
    this.loading = false;
  }

  private handleError(error: Error) {
    this.error = error;
    this.carouselSlides = undefined;
    this.loading = false;
  }
}
