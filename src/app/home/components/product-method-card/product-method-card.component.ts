import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductMethod } from 'src/app/shared/Models/product';

import { ProductMethodDetailComponent } from '../product-method-detail/product-method-detail.component';

@Component({
  selector: 'product-method-card',
  templateUrl: './product-method-card.component.html',
  styleUrls: ['./product-method-card.component.scss'],
})
export class ProductMethodCardComponent {
  @Input('productMethod') productMethod!: ProductMethod;

  constructor(private matDialog: MatDialog) {}

  openDialog() {
    this.matDialog.open(ProductMethodDetailComponent, {
      data: this.productMethod,
      width: '95%',
      maxWidth: 670,
    });
  }
}
