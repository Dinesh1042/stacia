import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '[navigation]',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Output('onCollapse') onCollapse = new EventEmitter();

  onLinkClickHandler() {
    this.onCollapse.emit();
  }
}
