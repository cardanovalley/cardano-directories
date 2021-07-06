import { Component, OnInit } from '@angular/core';

import { Store } from '../store';
import { StoresService } from '../stores.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
})
export class StoreListComponent implements OnInit {

  storeList: Store[] = [];

  getStores(): void {
    this.storeList = this.storesService.getStores();
  }

  constructor(private storesService: StoresService) { }

  ngOnInit() {
    this.getStores();
  }


}
