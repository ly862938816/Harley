import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material'
import { CartService } from '../../providers/cart.service';
import { AppConst } from '../../models/model';
import { VoucherCodeResponse } from '../../models/voucher-code-response';


@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {

  public cartItems: Array<any> = [];
  public totalPrice = 0;
  public priceAfterDiscount = 0;
  public itemsListPath = '/items';
  public optionSelected:any = {};
  public verifyingVoucher = false;
  
  private updateCartItemsFromProvider() {
    const cartObj = this.cartProvider.getCartItems();
    this.cartItems = [];
    Object.keys(cartObj).map((itemRef) => {
      this.cartItems.push(cartObj[itemRef]);
    });
  }
  
  private updatePriceFromProvider() {
    this.totalPrice = this.cartProvider.getTotalPrice();
    this.priceAfterDiscount = this.cartProvider.getPriceAfterDiscount();
  }

  constructor(private cartProvider:CartService) { }

  ngOnInit() {
    this.updateCartItemsFromProvider();
    this.updatePriceFromProvider();
  }

//点击去购买按钮触发
  handleBuyNow() {
    this.cartProvider.buyItemsInCart()
      .subscribe((res) => {
        console.log(res);
        this.updateCartItemsFromProvider();
        this.updatePriceFromProvider();
      }, () => {
        
      });
  }
//点击删除按钮删除一行购物信息
  handleRemoveItem(ref: string) {
    this.cartProvider.removeItem(ref);
    this.updateCartItemsFromProvider();
    this.updatePriceFromProvider();
  }
//根据传入的productId值显示加入购物车中的商品数量
  getQuantity(ref: string): number {
    const item = this.cartItems.find((cartItem) => cartItem.productId.toString() === ref.toString());
    if (item) {
      return item.count;
    }
    return 0;
  }
//处理数量改变
  handleQuantityChange($event, ref: string) {
    console.log($event, ref);
    this.cartProvider.updateQuantityOfItem(ref, Number($event.target.value));
    this.updatePriceFromProvider();
  }
//获取商品的库存数
  getQuantityList(ref: string): Array<number> {
    const itemsCount = [];
    const item = this.cartItems.find((cartItem) => cartItem.productId.toString() === ref.toString());
    if (item && item.max_items) {
      const maxAvailable = item.max_items;
      for (let i = 0; i < maxAvailable; i++) {
        itemsCount.push(i + 1);
      }
    }
    return itemsCount;

  }


}
