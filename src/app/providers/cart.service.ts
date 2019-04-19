import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/of';

import { ApiProvider } from './api.service';
import { ItemDescription } from '../models/item-description';
import { AppConst } from '../models/model';
import { environment } from '../../environments/environment';


@Injectable()
export class CartService {
  private cartItems:any = {}
  private priceAfterDiscount = 0;
  private totalPrice = 0;
  private totalItems = 0;
  private storeApiPath = environment.storeApiPath;

  constructor() { }

  public addItemToCart(item: ItemDescription) {
    const productId: string = item.productId;
    if (this.cartItems[productId]) {
      if (this.cartItems[productId].items_available > 0) {
        this.cartItems[productId].items_available = this.cartItems[productId].items_available - 1;
        this.cartItems[productId].count = this.cartItems[productId].count + 1;
        this.totalPrice = this.totalPrice + item.cost;
        // this.updateDiscountedPrice();
        this.totalItems += 1;
      }
    } else {
      if (item.items_available > 0) {
        this.cartItems[productId] = Object.assign({}, item);
        this.cartItems[productId].max_items = this.cartItems[productId].items_available;
        this.cartItems[productId].items_available = this.cartItems[productId].items_available - 1;
        this.cartItems[productId].count = 1;
        this.totalPrice = this.totalPrice + item.cost;
        // this.updateDiscountedPrice();
        this.totalItems += 1;
      }
    }
  }
  
  public isItemAvailable(ref: string) {
    let value = true;
    if (this.cartItems[ref]) {
      value = this.cartItems[ref].items_available > 0;
    }
    return value;
  }

  public getTotalAvailableItems(ref: string): number {
    if (this.cartItems[ref]) {
      return this.cartItems[ref].items_available;
    }
  }


}
