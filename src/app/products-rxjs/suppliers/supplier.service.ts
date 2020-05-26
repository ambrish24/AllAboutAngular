import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {of, throwError} from 'rxjs';
import {Supplier} from './supplier';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  suppliersUrl = 'api/suppliers';

  suppliersWithMap$ = of(1, 5, 8)
    .pipe(
      map(id => this.http.get<Supplier>(`${this.suppliersUrl}/${id}`)
      )
    );

  // TODO : Nesting of Subscribe - Not a Good Practice but since inner subscription is also a
  //  map we will have to perform nesting. Observable<Observable<Supplier>> - Observable of Observable of something
  //  represents Higher Order Observable. We can use higher order RxJS operators in this case. We will have to
  //  explicitly subscribe/unsubscribe as Async Pipe doesn't work with Higher Order Observable
  constructor(private http: HttpClient) {
    this.suppliersWithMap$
      .subscribe(o => o.subscribe(
        item => console.log('map result', item)
      ));
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
