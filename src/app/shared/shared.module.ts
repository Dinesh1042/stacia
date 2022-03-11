import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonLoaderDirective } from './directives/button-loader.directive';

@NgModule({
  declarations: [ButtonLoaderDirective],
  imports: [CommonModule],
  exports: [ButtonLoaderDirective],
})
export class SharedModule {}
