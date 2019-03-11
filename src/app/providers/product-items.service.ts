import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


import { ApiProvider } from './api.service';
import { AppConst } from '../models/model';
import { ItemsListItem } from '../models/items-list-item';

@Injectable({
  providedIn: 'root'
})
export class ProductItemsService {
  private storeApiPath: string = environment.storeApiPath;

  constructor(private apiProvider: ApiProvider) { }

  getItemsList(): Observable<Array<ItemsListItem>> {
    const itemsList: string = this.storeApiPath + AppConst.STORE_API_PATHS.getItems;
    return this.apiProvider.httpGet(itemsList)
      .pipe(
        map((res: any) => {
          if (res) {
            /* res = itemsListMock;
            res = res.map((item) => (
              new ItemsListItem(item)
            )) */
          }
          console.log('res is ', res);
          return res;
        }));
  }
}
