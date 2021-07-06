import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreBoxComponent } from './store-box/store-box.component';
import { StoreListComponent } from './store-list/store-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AddStoreComponent } from './add-store/add-store.component';


@NgModule({
  declarations: [
    AppComponent,
    StoreBoxComponent,
    StoreListComponent,
    AddStoreComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
