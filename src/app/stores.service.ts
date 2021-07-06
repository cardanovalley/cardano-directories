import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Store } from './store'
import stores from './stores.json';


@Injectable({
  providedIn: 'root'
})
export class StoresService {

  private storeList: Store[] = stores;

  getStores(): Store[] {
    return this.storeList;
  }

  constructor(
    private http: HttpClient) { }

}
