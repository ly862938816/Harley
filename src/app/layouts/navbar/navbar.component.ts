import { Component, Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface ISubItem {
  subItemName: string;
  subItemString: string;
}
interface IMenuItem {
  buttonName: string;
  iconString: string;
  subItems: ISubItem[];
}

@Component({
    selector: 'app-navbar-component',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})


@Injectable()
export class NavbarComponent {
  menuItems: IMenuItem[];

    @Output() notify: EventEmitter<string>
        = new EventEmitter<string>();

 constructor (private http: HttpClient) {
    // console.log('AppComponent constructor');
   this.http.get<any>('http://localhost:3000/menuitems')
     .subscribe(
      (data) => {
         // console.log(`got : ${data['menuItems'][0].buttonName}`);
         this.menuItems = data['menuItems'];
         // console.log(`got : ${this.menuItems[0].buttonName}`);
      },
      err => {
        console.log(`error : ${err}`);
      },
      () => {
        console.log(`success`);
      }
    );
  }

  navClicked(item: IMenuItem) {
    this.notify.emit(`${item.buttonName}`);
  }

}
