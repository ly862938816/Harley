import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RightScreenComponent} from './rightscreen/rightscreen.component';
import { SideNavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    RightScreenComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RightScreenComponent,
    SideNavComponent
  ]
})
export class ProductModule { }
