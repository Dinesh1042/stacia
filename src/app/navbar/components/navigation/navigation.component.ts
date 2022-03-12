import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: '[navigation]',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Output('onCollapse') onCollapse = new EventEmitter();
  @HostListener('window:resize') getWindowWidth() {
    this.isDesktopView = window.innerWidth > 992;
  }

  isDesktopView = false;

  constructor() {
    this.getWindowWidth();
  }

  onLinkClickHandler() {
    this.onCollapse.emit();
  }
}
