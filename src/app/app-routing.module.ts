import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreListComponent } from './store-list/store-list.component';
import { AddStoreComponent } from './add-store/add-store.component';

const routes: Routes = [
  { path: 'add-store', component: AddStoreComponent },
  { path: '', component: StoreListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
