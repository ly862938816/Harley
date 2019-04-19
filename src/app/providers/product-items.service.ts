import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { ApiProvider } from './api.service';
import { AppConst } from '../models/model';
import { ItemsListItem } from '../models/items-list-item';
import { ItemDescription } from '../models/item-description';

import itemDescriptionListMock from '../mock/items-description';

@Injectable({
  providedIn: 'root'
})
export class ProductItemsService {

  // 获取环境配置文件中的，后台API路径
  private storeApiPath: string = environment.storeApiPath;

  // apiProvider实现http的各种请求服务
  constructor(private apiProvider: ApiProvider) { }

  // 使用apiProvider的实例获取后台数据
  getItemsList(): Observable<Array<ItemsListItem>> {
    const itemsList: string = this.storeApiPath + AppConst.STORE_API_PATHS.getItems;
    return this.apiProvider.httpGet(itemsList)
      .pipe(
        map((res: any) => {
          if (res) {
            // console.log('res is ', res);
            return res;
          }
        }));
  }
  getItem(id: string): Observable<ItemDescription> {
    const pathWithId: string = AppConst.STORE_API_PATHS.itemDescription.replace('{{id}}', id);
    const itemDesc = `${this.storeApiPath}${pathWithId}`;
    console.log(itemDesc);
    return this.apiProvider.httpGet<ItemDescription>(itemDesc)
      .pipe(
        map( (res: ItemDescription) => {
          console.log('from server:' + JSON.stringify(res));
          res = itemDescriptionListMock[Number(id) - 1];
          console.log('from mock:' + JSON.stringify(res));
          //  res = new ItemDescription(res);
         // console.log('after new:' + JSON.stringify(res));
          return res;
        })
      );
      // .pipe(
      //   map((res: any) => {
      //     if (res) {
      //       console.log(res);
      //       res = itemDescriptionListMock[Number(id) - 1];
      //       // res = new ItemDescription(res);
      //       // console.log(res)
      //       return res;
      //     }
      //   })
      // );
  }
}
