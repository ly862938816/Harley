import { Component, OnInit } from '@angular/core';
import { ItemsListItem } from '../../models/items-list-item';
import { Router } from '@angular/router';

import { ProductItemsService } from '../../providers/product-items.service';

@Component({
  selector: 'app-newmodel',
  templateUrl: './newmodel.component.html',
  styleUrls: ['./newmodel.component.css']
})
export class NewmodelComponent implements OnInit {
  public itemsList: Array<ItemsListItem>;
  public isLoading = false;
  public isError = false;

  constructor(private itemsProvider: ProductItemsService,
    private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
    this.itemsProvider.getItemsList()
      .subscribe(itemsList => {
        // console.log('item is : component', itemsList);
        this.itemsList = itemsList['newModelItems'];
        // this.itemsList = itemsList['newModelItems'].slice(0,3);
        //  console.log(`this.itemsList: ${JSON.stringify(this.itemsList)}`);
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        this.isError = true;
      });
  }

}
