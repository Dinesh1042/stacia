import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, HomeCarouselComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
