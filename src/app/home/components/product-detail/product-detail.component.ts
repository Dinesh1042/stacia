import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/Models/product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  @Input('product') product!: Product;
}
