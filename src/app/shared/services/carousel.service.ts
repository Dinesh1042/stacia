import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HomeCarousel } from '../Models/carousel';

// Mocked Carousel Data's
const homeCarousel = [
  {
    title: 'We are building the better world.',
    image: 'assets/home-carousel/better-living.jpeg',
    description:
      'We have always held to the hope, the belief, the conviction that there is a better life, a better world, beyond the horizon.',
  },
  {
    title: 'We assure a 24hr turn around period.',
    image: 'assets/home-carousel/residential-solar.jpeg',
    description:
      'We have extensive experience in designing of residential solar system.',
  },
  {
    title: 'Dedicated project managers for our clients.',
    image: 'assets/home-carousel/commercial-solar.jpeg',
    description:
      'Experience in designing systems from 20kw up to several hundred kW in this sector.',
  },
  {
    title: 'SoPs are put in place to create error free designs.',
    image: 'assets/home-carousel/ev-charging.jpeg',
    description:
      'Our team of engineers is experienced in generating EV-charger plan-sets that supports safe and efficient installations.',
  },
  {
    title:
      "We provide electrical and structural reviews in all 50 states and it's AHJs.",
    image: 'assets/home-carousel/energy-storage-system.jpg',
    description:
      'Backup systems with AC coupled batteries like Telsa Powerwall 2.0 with solarEdge or micro-inventor. ',
  },
  {
    title: 'Experienced team working 24/7 cratering to your needs.',
    image: 'assets/home-carousel/generator-plan-set.png',
    description:
      'Backup systems with AC coupled batteries like Telsa Powerwall 2.0 with solarEdge or micro-inventor. ',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  constructor() {}

  getHomeCarousel(): Observable<HomeCarousel[]> {
    return of(homeCarousel);
  }
}
