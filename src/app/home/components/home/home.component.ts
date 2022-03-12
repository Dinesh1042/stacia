import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('carousel', { read: ElementRef })
  carouselElRef?: ElementRef<HTMLElement>;
  @ViewChild('product', { read: ElementRef })
  productElRef?: ElementRef<HTMLElement>;

  prevValue = 0;
  currentValue = 0;
  isRunning = false;

  @HostListener('window:scroll') onScroll() {
    this.prevValue = this.currentValue;
    this.currentValue = window.scrollY;

    const top = (this.productElRef?.nativeElement as HTMLElement).offsetTop;
    const isScrollingDown = this.currentValue > this.prevValue;
    const carouselHeight = (this.carouselElRef?.nativeElement as HTMLElement)
      .clientHeight;

    if (this.currentValue > top || !isScrollingDown) return;

    if (
      isScrollingDown &&
      this.currentValue < carouselHeight &&
      !this.isRunning
    ) {
      this.isRunning = true;
      window.scrollTo({ top: top - 36, behavior: 'smooth' });
    }

    if (!isScrollingDown || !(this.currentValue < carouselHeight))
      this.isRunning = false;
  }
}
