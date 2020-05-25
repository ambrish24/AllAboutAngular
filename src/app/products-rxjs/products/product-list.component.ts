import {Component, OnInit} from '@angular/core';

import {Product} from './product';
import {ProductService} from './product.service';
import {EMPTY, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';
  categories;

  products$ = this.productService.productsWithCategory$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

  /*products$: Observable<Product[]>;*/

  constructor(private productService: ProductService) { }

  /*ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }*/

  onAdd(): void {
    console.log('Not yet implemented');
  }

  onSelected(categoryId: string): void {
    console.log('Not yet implemented');
  }
}
