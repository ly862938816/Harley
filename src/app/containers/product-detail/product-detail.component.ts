import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ProductItemsService } from '../../providers/product-items.service';
import { CartService } from '../../providers/cart.service';
import { ItemDescription } from '../../models/item-description';
import { AppConst } from 'src/app/models/model';
import Mockdata from '../../mock/items-description';
import { Mock } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  public item:any;

  constructor(
    private itemsProvider:ProductItemsService,
    private activedRoute: ActivatedRoute,
    private cartProvider: CartService,
    private router: Router
    ) { }

  ngOnInit() {
    const ref: string = this.activedRoute.snapshot.paramMap.get('id');
      this.itemsProvider.getItem(ref).subscribe(()=>{
        this.item = Mockdata[Number(ref)-1];
        console.log(this.item.image)
      })
  } 
  handleAddToCartClick(){
    this.cartProvider.addItemToCart(this.item);
    //console.log(this.item)
  }

  isItemAvailable():boolean{
    return this.cartProvider.isItemAvailable(this.item.productId);
  }
  
  getItemsAvailable(): number {
    const count = this.cartProvider.getTotalAvailableItems(this.item.productId);
    if (count !== undefined && count !== null) {
      return count;
    } else {
      return this.item.items_available; 
    }
    
  }
  

}
