import {ChangeDetectionStrategy, Component} from '@angular/core';

import {EMPTY, Subject} from 'rxjs';
import {ProductService} from '../product.service';
import {catchError} from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListAltComponent {
  pageTitle = 'Products';

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(private productService: ProductService) { }

  products$ = this.productService.productsWithCategory$
    .pipe(
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );

  selectedProduct$ = this.productService.selectedProduct$;

  onSelected(productId: number): void {
    this.productService.selectedProductChanged(productId);
  }

}
