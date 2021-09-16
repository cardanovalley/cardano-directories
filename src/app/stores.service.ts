import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Store } from './store';


@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(private http: HttpClient) { };

  private attempts = 0;

  private storesUrl = 'http://localhost:8000/stores/?format=json';

  // private storesUrl = 'https://testing-cardano-back.herokuapp.com/stores/?format=json';

  // private storesUrl = 'https://cardano-directory-back.herokuapp.com/stores/?format=json';

  getStores(url: string): Observable<any> {
    const currentUrl = url ?? this.storesUrl;

    return this.http.get(currentUrl).pipe(
      tap(data => {
        this.attempts = 0;
      }),
      catchError((err) => {
        debugger;
        if (err.status === 0 && this.attempts === 0) {
          debugger;
          this.attempts += 1;
          return this.getStores(currentUrl)
        } else {
          console.log('error caught in service')
          console.error(err);
          return throwError(err);
        }
      })
    )
  }

  private postUrl = 'http://localhost:8000/stores/';

  postStore(store: Store): Observable<any> {

    return this.http.post<Store>(this.postUrl, store)
  }
}
