import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoadingService } from '../loading.service';

import { StoresService } from '../stores.service';
import { Store } from '../store';


@Component({
  selector: 'app-add-your-store',
  templateUrl: './add-your-store.component.html',
  styleUrls: ['./add-your-store.component.css']
})
export class AddYourStoreComponent {

  addStoreForm = this.formBuilder.group({
    name: '',
    address: '',
    website: '',
  })

  newStore: Store = {
    "name": "Nicky detached37",
    "website": "nick-detached.com7",
    "address": "Detached St. 3337",
    "googlemaps_link": "",
    "picture": null,
    "country": null,
    "state": null,
  };

  constructor(
    private _loading: LoadingService,
    private formBuilder: FormBuilder,
    private storesService: StoresService,

  ) { }

  postStore(myStore) {
    this.storesService
      .postStore(myStore)
      .subscribe();
  }

  onSubmit(): void {
    this.postStore(this.newStore);
    this.addStoreForm.reset();
  }

}
