import {ChangeDetectionStrategy, Component} from '@angular/core';

import { ProductService } from '../product.service';
import {Supplier} from '../../suppliers/supplier';
import {catchError, filter, map} from 'rxjs/operators';
import {combineLatest, EMPTY} from 'rxjs';
import {Product} from '../product';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  errorMessage = '';
  product;
  productSuppliers: Supplier[] = [];

  product$ = this.productService.selectedProduct$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

  productSuppliers$ = this.productService.selectedProductSuppliers$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

  pageTitle$ = this.product$
    .pipe(
      map((p: Product) =>
        p ? `Product Detail for: ${p.productName}` : null)
    );


  constructor(private productService: ProductService) { }

}
