import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeCarousel } from 'src/app/shared/Models/carousel';
import { CarouselService } from 'src/app/shared/services/carousel.service';
import Swiper, { Autoplay, EffectFade, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

Swiper.use([Autoplay, EffectFade]);

@Component({
  selector: '[homeCarousel]',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
})
export class HomeCarouselComponent implements OnInit {
  @ViewChild(SwiperComponent, { static: false }) swiperElRef?: SwiperComponent;

  carouselSlides?: HomeCarousel[];
  error: Error | null = null;
  loading = false;
  swiperConfig: SwiperOptions = {
    effect: 'fade',
    loop: true,
    speed: 750,
    autoplay: {
      delay: 4000,
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

  handleNextSlide() {
    this.swiperElRef?.swiperRef.slideNext(500);
  }

  handlePrevSlide() {
    this.swiperElRef?.swiperRef.slidePrev(500);
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
