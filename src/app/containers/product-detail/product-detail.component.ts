import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ItemsListItem } from '../../models/items-list-item';
import { ProductItemsService } from '../../providers/product-items.service';
// import { CartService } from '../../providers/cart.service';
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
    private router: Router
    ) { }

  ngOnInit() {
    const ref: string = this.activedRoute.snapshot.paramMap.get('id');
    this.item = Mockdata[0];
    // this.itemsProvider.getItem(ref)
    // .subscribe((item: any)=>{
    //   console.log('in product component:  ' + JSON.stringify(item));
    //   this.item = item;
    //   // console.log(item.label);
    // },()=>{
      
    // });
    
  } 

}
