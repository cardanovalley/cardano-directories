import { Component } from '@angular/core';
import stores from './stores.json';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ada and Friends - Business Directory';
  public storeList: {
    name: string,
    country: string,
    website: string
  }[] = stores;
}
