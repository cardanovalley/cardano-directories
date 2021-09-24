import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { };

  private attempts = 0;

  private countriesUrl = 'http://localhost:8000/countries/?format=json';

  // private countriesUrl = 'https://testing-cardano-back.herokuapp.com/countries/?format=json';

  // private countriesUrl = 'https://cardano-directory-back.herokuapp.com/countries/?format=json';

  getCountries(): Observable<any> {
    return this.http.get(this.countriesUrl).pipe(
      tap(data => {
        this.attempts = 0;
      }),
      catchError((err) => {
        if (err.status === 0 && this.attempts === 0) {
          this.attempts += 1;
          return this.getCountries()
        } else {
          console.log('error caught in service');
          console.error(err);
          return throwError(err);
        }
      })
    )
  }
}
