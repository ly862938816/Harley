import { Component, OnInit } from '@angular/core';
import { ItemsListItem } from '../../models/items-list-item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newmodel',
  templateUrl: './newmodel.component.html',
  styleUrls: ['./newmodel.component.css']
})
export class NewmodelComponent implements OnInit {
  public itemlist: Array<ItemsListItem>;
  public isLoading = false;
  public isError = false;

  constructor(private http: HttpClient) {
    this.http.get<ItemsListItem>('http://localhost:3000/newModelItems').subscribe(
      (data) => {
        this.itemlist = data['newModelItems'];
        console.log(this.itemlist);
      }
    );
  }

  ngOnInit() {
  }

}
