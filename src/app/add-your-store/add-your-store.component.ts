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

  picture: File
  countries: string[] = [];

  addStoreForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    website: ['', Validators.required],
    googlemaps_link: [""],
    picture: null,
    country: null,
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
    }
  }

  postStore(myStore: FormData) {
    this.storesService
      .postStore(myStore)
      .subscribe();
  }

  getCountries() {
    this.countriesService.getCountries().subscribe((data: JSON) => {
      let names = data
      for (let i = 0; i < Object.keys(data).length; i++) {

        this.countries.push(data[i]);
      }
      console.log('Countries');
      console.log(this.countries);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.getCountries();
  }

  onSubmit(): void {
    const myFormValue = this.addStoreForm.value

    const myFormData = new FormData();

    for (const [key, value] of Object.entries(myFormValue)) {
      if (key === 'picture') {
        myFormData.append(key, this.picture);
      } else {
        myFormData.append(key, myFormValue[key]);
      }
    }

    this.postStore(myFormData);

    console.log(myFormData);
  }
}
