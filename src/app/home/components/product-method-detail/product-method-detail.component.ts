import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductMethod } from 'src/app/shared/Models/product';

@Component({
  selector: 'product-method-detail',
  templateUrl: './product-method-detail.component.html',
  styleUrls: ['./product-method-detail.component.scss'],
})
export class ProductMethodDetailComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public productMethodDetail: ProductMethod
  ) {}
}
