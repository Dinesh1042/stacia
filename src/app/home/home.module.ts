import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsNavComponent } from './components/products-nav/products-nav.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProductMethodCardComponent } from './components/product-method-card/product-method-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCarouselComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductsNavComponent,
    ProductMethodCardComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SwiperModule],
})
export class HomeModule {}
