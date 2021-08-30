import { Component } from '@angular/core';

import { StoresService } from './stores.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Ada and Friends - Business Directory';

  constructor(private storesService: StoresService) { }

}

