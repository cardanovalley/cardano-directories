import { Component } from '@angular/core';
import stores from './stores.json';


interface Store {
  name: string,
  country: string,
  state: string,
  address: string,
  website: string,
  picture: string,
  googlemaps: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ada and Friends - Business Directory';
  public storeList: Store[] = stores;
}
