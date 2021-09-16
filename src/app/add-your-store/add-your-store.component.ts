import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup }
  from '@angular/forms';
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
    name: ['', Validators.required],
    address: ['', Validators.required],
    website: ['', Validators.required],
    googlemaps_link: [""],
    picture: null,
    country: null,
    state: null,

  });

  newStore: Store = {
    name: this.addStoreForm.value.storeName,
    website: this.addStoreForm.value.address,
    address: this.addStoreForm.value.website,
    googlemaps_link: "",
    picture: null,
    country: null,
    state: null,
  };

  // addStoreForm = new FormGroup({
  //   storeName: new FormControl(''),
  //   address: new FormControl(''),
  //   website: new FormControl(''),
  // });

  constructor(
    private _loading: LoadingService,
    private formBuilder: FormBuilder,
    private storesService: StoresService,

  ) { }

  postStore(myStore: Store) {
    this.storesService
      .postStore(myStore)
      .subscribe();
  }

  onSubmit(): void {
    this.postStore(this.addStoreForm.value);

    console.log(this.addStoreForm.value);
  }

}
