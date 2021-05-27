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
    state: string
    address: string
    website: string,
    picture: string,
    googlemaps: string
  }; // TODO: Import this from an external interface.
  @Input() index!: number;


  constructor() { }

  ngOnInit(): void {

  }

}
