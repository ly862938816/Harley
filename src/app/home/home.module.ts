import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { NewmodelComponent } from './newmodel/newmodel.component';
import { NewsfashionComponent } from './newsfashion/newsfashion.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home.component';

import { SubscribeComponent } from '../layouts/subscribe/subscribe.component';
import { HomefooterComponent } from './homefooter/homefooter.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    NewmodelComponent,
    NewsfashionComponent,
    ArticleComponent,
    HomeComponent,
    SubscribeComponent,
    HomefooterComponent,
    ProductListComponent
  ],
  imports: [
    MaterialModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    ProductListComponent
  ]
})
export class HomeModule { }
