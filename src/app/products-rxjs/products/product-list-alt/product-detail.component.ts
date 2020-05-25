import {ChangeDetectionStrategy, Component} from '@angular/core';

import { ProductService } from '../product.service';
import {Supplier} from '../../suppliers/supplier';
import {catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  pageTitle = 'Product Detail';
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

  constructor(private productService: ProductService) { }

}
