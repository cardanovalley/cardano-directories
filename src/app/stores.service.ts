import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(private http: HttpClient) { }

  //private storesUrl = 'http://localhost:8000/stores/?format=json';
  // private storesUrl = 'https://testing-cardano-back.herokuapp.com/stores/?format=json';
  private storesUrl = 'https://cardano-directory-back.herokuapp.com/stores/?format=json';

  getStores(url: string): Observable<any> {
    const currentUrl = url ?? this.storesUrl

    return this.http.get(currentUrl)
  }


}
