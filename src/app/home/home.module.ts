import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { NewmodelComponent } from './newmodel/newmodel.component';
import { NewsfashionComponent } from './newsfashion/newsfashion.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home.component';
import { LoadingSpinnerComponent } from '../layouts/loading-spinner/loading-spinner.component';
import { NetworkErrorComponent } from '../layouts/network-error/network-error.component';
import { SubscribeComponent } from '../layouts/subscribe/subscribe.component';
import { HomefooterComponent } from './homefooter/homefooter.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from '../layouts/header/header.component';

const components = [
  NewmodelComponent,
    NewsfashionComponent,
    ArticleComponent,
    HomeComponent,
    SubscribeComponent,
    HomefooterComponent,
    LoadingSpinnerComponent,
    NetworkErrorComponent,
    HeaderComponent,
    ProductListComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    components
  ]
})
export class HomeModule { }
