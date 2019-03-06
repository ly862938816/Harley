import { Component, Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface IButtonName {
    ButtonName: string;
}

@Component({
    selector: 'app-navbar-component',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})


@Injectable()
export class NavbarComponent {
    menuItems: IButtonName[];

    @Output() notify: EventEmitter<string>
        = new EventEmitter<string>();

 constructor (private http: HttpClient) {
    console.log('AppComponent constructor');
   this.http.get('http://localhost:3000/menuitems')
     .subscribe(
      (data) => {
        // console.log(`got : ${data}`);
         this.menuItems = data['menuItems'];
      },
      err => {
        console.log(`error : ${err}`);
      },
      () => {
        console.log(`success`);
      }
    );
  }

  navClicked(item: IButtonName) {
    this.notify.emit(`${item.ButtonName}`);
  }

}
