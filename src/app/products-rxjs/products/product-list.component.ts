import {Component, OnInit} from '@angular/core';

import {Product} from './product';
import {ProductService} from './product.service';
import {combineLatest, EMPTY, Observable, Subject} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {ProductCategoryService} from '../product-categories/product-category.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pageTitle = 'Product List';
  errorMessage = '';

  private categorySelectedSubject = new Subject<number>();
  categorySelectedAction$ = this.categorySelectedSubject.asObservable();

  // TODO : Usage of RxJS map(), combineLatest() function, Arrays filter() function
  //  to filter Products based on Category Action Stream
  products$ = combineLatest([
    this.productService.productsWithCategory$,
    this.categorySelectedAction$
  ]).pipe(
    map(([products, selectedCategoryId]) =>
      products.filter(product =>
        selectedCategoryId ? product.categoryId === selectedCategoryId : true
      )),
    tap(data => console.log('Products: ', JSON.stringify(data))),
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  );

  /*products$ = this.productService.productsWithCategory$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );*/

  /*products$: Observable<Product[]>;*/

  categories$ = this.productCategoryService.productCategories$
    .pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

  constructor(private productService: ProductService,
              private productCategoryService: ProductCategoryService) { }

  /*ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }*/

  onAdd(): void {
    console.log('Not yet implemented');
  }

  // TODO We used + sign here to cast string into number
  onSelected(categoryId: string): void {
    this.categorySelectedSubject.next(+categoryId);
  }
}
