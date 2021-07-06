import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreBoxComponent } from './store-box/store-box.component';
import { StoreListComponent } from './store-list/store-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreBoxComponent,
    StoreListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
