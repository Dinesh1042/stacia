import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/Models/product';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'products-nav',
  templateUrl: './products-nav.component.html',
  styleUrls: ['./products-nav.component.scss'],
})
export class ProductsNavComponent {
  @Input('products') products: Product[] = [];
  @Output('indexChange') indexChangeHandler = new EventEmitter();

  @ViewChild(SwiperComponent, { static: false })
  swiperComponentRef?: SwiperComponent;

  swiperConfig: SwiperOptions = {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    on: {
      activeIndexChange: ({ realIndex }) =>
        this.indexChangeHandler.emit(realIndex),
    },
    breakpoints: {
      1100: {
        slidesPerView: 5,
      },
    },
  };

  constructor() {}

  onPrevSlide() {
    this.swiperComponentRef?.swiperRef.slidePrev(500);
  }

  onNextSlide() {
    this.swiperComponentRef?.swiperRef.slideNext(500);
  }
}
