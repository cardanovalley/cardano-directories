import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-store-box',
  templateUrl: './store-box.component.html',
  styleUrls: ['./store-box.component.css']
})
export class StoreBoxComponent implements OnInit {

  @Input() store!: {
    name: string,
    country: string,
    website: string
  }; // TODO: Import this from an external interface.


  constructor() { }

  ngOnInit(): void {
  }

}
