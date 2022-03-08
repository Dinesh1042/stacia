import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [NavbarComponent, NavigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    NgbCollapseModule,
    NgbDropdownModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
