import {Component} from '@angular/core';

import {EMPTY} from 'rxjs';
import {ProductService} from '../product.service';
import {catchError} from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html'
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  errorMessage = '';
  selectedProductId;

  constructor(private productService: ProductService) { }

  products$ = this.productService.productsWithCategory$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

  onSelected(productId: number): void {
    console.log('Not yet implemented');
  }
}
