import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Store} from "../models/store";
@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor() { }

  getStores(): Observable<Store[]> {
    const stores = of(Store);
    return stores;
  }
}
