import { Component, OnInit } from '@angular/core';
import { ItemsListItem } from '../../models/items-list-item';
import { Router } from '@angular/router';
import { ProductItemsService } from '../../providers/product-items.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public itemsList: Array<ItemsListItem>;

  constructor(private itemsProvider: ProductItemsService,
    private router:Router) { }

  ngOnInit() {
    this.itemsProvider.getItemsList().subscribe(
      itemsList =>{
        this.itemsList = itemsList['newModelItems'];
        // this.itemsList = itemsList['newModelItems'].slice(0,6);
      }, err =>{
      });
  }

}
