import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup }
  from '@angular/forms';
import { LoadingService } from '../loading.service';

import { StoresService } from '../stores.service';
import { CountriesService } from '../countries.service';



@Component({
  selector: 'app-add-your-store',
  templateUrl: './add-your-store.component.html',
  styleUrls: ['./add-your-store.component.css']
})
export class AddYourStoreComponent {

  picture: File;
  countries: Object = {}; // This is a key:value list with country 'name' and
  // url values because the API is a hyperlinked serializer
  fileName: string = '';

  addStoreForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    website: ['', Validators.required],
    googlemaps_link: [null], // Name convention according to backend
    picture: [null],
    country: [null],
    state: null,

  });

  constructor(
    private _loading: LoadingService,
    private formBuilder: FormBuilder,
    private storesService: StoresService,
    private countriesService: CountriesService,

  ) { }

  public onFileChanged(event: any) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.picture = file;
      this.fileName = file.name;
    }
  }

  postStore(myStore: FormData) {
    this.storesService
      .postStore(myStore)
      .subscribe();
  }

  getCountries() {
    this.countriesService.getCountries().subscribe((data: JSON) => {
      this.countries = data
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.getCountries();
  }

  onSubmit(): void {
    const myFormValue = this.addStoreForm.value;
    const myFormData = new FormData();
    this.addStoreForm.reset();
    this.fileName = '';

    for (const [key, value] of Object.entries(myFormValue)) {
      if (key === 'picture' && myFormValue[key] != undefined) {
        myFormData.append(key, this.picture);
      } else if (value != null && value != undefined) {
        myFormData.append(key, myFormValue[key]);
      }
    }

    this.postStore(myFormData);

    console.log(myFormData);
  }
}
