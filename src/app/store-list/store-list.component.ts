import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { Store, Pagination } from '../store';
import { StoresService } from '../stores.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {

  loading: boolean = false;

  storeList: Store[] = [];
  paginationNext: string = '';
  paginationPrevious: string = '';
  numberOfPages: number;
  currentPage: number;
  pagesShown: Pagination[] = [];
  initializer: number;
  endCondition: number; // Sets the final number of pages to paginate.
  paginationAddress: string;


  getStores(url?: string) {
    this.storesService.getStores(url).subscribe((data: JSON) => {
      this.storeList = data['results'];
      this.paginationNext = data['next'];
      this.paginationPrevious = data['previous'];
      this.numberOfPages = Math.ceil(data['count'] / 9);

      console.log(this.paginationNext)

      // Extraction ofthe current page number from "next page" link
      if (this.paginationNext !== null) {
        this.currentPage = Number(this.paginationNext.split('page=')[1]) - 1;
        this.paginationAddress = this.paginationNext.split('page=')[0];
      } else {
        this.currentPage = this.numberOfPages;
      }



      this.pagesShown = []; // We reset the list on every API call
      // this.initializer = Math.max(1, this.currentPage - 2) <= 0 ? 1 :
      //   this.currentPage - 2;
      // this.endCondition = Math.min(this.currentPage + 2, this.numberOfPages)


      // Selection of the page numbers to be displayed on the pagination nav

      this.pagesShown = []; // We reset the list on every API call

      // Set initializer and end condition for pages loop

      if (this.numberOfPages <= 5 || [1, 2].includes(this.currentPage)) {
        this.initializer = 1;
        this.endCondition = Math.min(this.numberOfPages, 5);
      } else if ([this.numberOfPages, this.numberOfPages - 1].includes(
        this.currentPage)) {
        this.initializer = this.currentPage - 4;
        this.endCondition = this.numberOfPages;
      } else {
        this.initializer = this.currentPage - 2;
        this.endCondition = this.currentPage + 2;
      }

      // Set pages to be shown with corresponding API address

      for (let i = this.initializer; i <= this.endCondition; i++) {
        this.pagesShown.push({
          "number": i,
          "address": `${this.paginationAddress}page=${i}`
        })
      }



      // if (this.numberOfPages <= 5 || [1, 2].includes(this.currentPage)) {
      //   for (let i = 1; i < (this.numberOfPages + 1); i++) {
      //     this.pagesShown.push({
      //       "number": i,
      //       "address": `http://localhost:8000/stores/?format=json&page=${i}`
      //     })

      //     if (this.pagesShown.length == 5) {
      //       break
      //     }
      //   }
      // } else if ([this.numberOfPages, this.numberOfPages - 1].includes(
      //   this.currentPage)) {
      //   for (let i = (this.currentPage - 4);
      //     i < this.numberOfPages + 1; i++) {
      //     this.pagesShown.push({
      //       "number": i,
      //       "address": `http://localhost:8000/stores/?format=json&page=${i}`
      //     })
      //   }
      // } else {
      //   for (let i = this.currentPage - 2; i < this.currentPage + 3; i++) {
      //     this.pagesShown.push({
      //       "number": i,
      //       "address": `http://localhost:8000/stores/?format=json&page=${i}`
      //     })
      //   }
      // }
    });
  }


  constructor(private _loading: LoadingService,
    private storesService: StoresService) { }

  ngOnInit() {
    this.getStores();
    this.listenToLoading();
  }

  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

}
