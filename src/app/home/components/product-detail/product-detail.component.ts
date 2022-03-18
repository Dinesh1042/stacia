import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/shared/Models/product';

import { DownloadChecklistComponent } from '../download-checklist/download-checklist.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  @Input('product') product!: Product;

  constructor(private dialog: MatDialog) {}

  handleDownloadChecklist() {
    this.dialog.open(DownloadChecklistComponent, {
      width: '95%',
      maxWidth: 600,
    });
  }
}
