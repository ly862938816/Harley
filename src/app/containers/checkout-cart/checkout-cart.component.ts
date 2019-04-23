import { Component, OnInit } from '@angular/core';
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


  

}
