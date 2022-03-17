import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SwiperModule } from 'swiper/angular';

import { SharedModule } from '../shared/shared.module';
import { ContactUsFormComponent } from './components/contact-us-form/contact-us-form.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductMethodCardComponent } from './components/product-method-card/product-method-card.component';
import { ProductMethodDetailComponent } from './components/product-method-detail/product-method-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsNavComponent } from './components/products-nav/products-nav.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCarouselComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductsNavComponent,
    ProductMethodCardComponent,
    ContactUsComponent,
    ContactUsFormComponent,
    ProductMethodDetailComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule,
  ],
})
export class HomeModule {}
