import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ButtonLoaderDirective } from './directives/button-loader.directive';

@NgModule({
  declarations: [ButtonLoaderDirective],
  imports: [CommonModule, HttpClientModule],
  exports: [ButtonLoaderDirective],
})
export class SharedModule {}
