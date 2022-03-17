import { Component, NgZone, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/Models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: '[homeProduct]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products?: Product[];
  error: Error | null = null;
  loading = false;
  activeSlideIndex = 0;

  constructor(private productService: ProductService, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAllProducts().subscribe({
      next: this.handleSuccess.bind(this),
      error: this.handleError.bind(this),
    });
  }

  handleIndexChange(index: number) {
    this.ngZone.run(() => {
      this.activeSlideIndex = index;
    });
  }

  private handleSuccess(products: Product[]) {
    this.products = products;
    this.error = null;
    this.loading = false;
  }

  private handleError(error: Error) {
    this.error = error;
    this.products = undefined;
    this.loading = false;
  }
}
