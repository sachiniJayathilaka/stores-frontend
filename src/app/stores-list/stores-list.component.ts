import { Component, OnInit } from '@angular/core';
import {StoresService} from "../../services/stores.service";
import {Store} from "../../models/store";

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.scss']
})
export class StoresListComponent implements OnInit {

  stores: Store[] [];
  filter = new FormControl('', { nonNullable: true });
  constructor(public storeService: StoresService) { }

  ngOnInit(): void {
    this.getStores();
  }

  getStores(): void {
    this.storeService.getStores()
      .subscribe(stores => this.stores = stores);
  }
}
