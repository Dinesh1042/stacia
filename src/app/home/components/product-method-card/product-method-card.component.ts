import { Component, Input, OnInit } from '@angular/core';
import { ProductMethod } from 'src/app/shared/Models/product';

@Component({
  selector: 'product-method-card',
  templateUrl: './product-method-card.component.html',
  styleUrls: ['./product-method-card.component.scss'],
})
export class ProductMethodCardComponent implements OnInit {
  @Input('productMethod') productMethod!: ProductMethod;

  constructor() {}

  ngOnInit(): void {}
}
