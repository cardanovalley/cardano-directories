import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { StoreBoxComponent } from './store-box/store-box.component';
import { StoreListComponent } from './store-list/store-list.component';
import { HttpRequestInterceptor } from './http-request-interceptor';
import { AddYourStoreComponent } from './add-your-store/add-your-store.component';


@NgModule({
  declarations: [
    AppComponent,
    StoreBoxComponent,
    StoreListComponent,
    AddYourStoreComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
