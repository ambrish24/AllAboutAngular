import { Component } from '@angular/core';

import { ProductService } from '../product.service';
import {Supplier} from '../../suppliers/supplier';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product;
  productSuppliers: Supplier[] = [];

  constructor(private productService: ProductService) { }

}
