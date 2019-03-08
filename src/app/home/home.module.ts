import { NgModule } from '@angular/core';
import { NewmodelComponent } from './newmodel/newmodel.component';
import { ProdectlistComponent } from './prodectlist/prodectlist.component';
import { NewsfashionComponent } from './newsfashion/newsfashion.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { SubscribeComponent } from '../layouts/subscribe/subscribe.component';
import { HomefooterComponent } from './homefooter/homefooter.component';

@NgModule({
  declarations: [
    NewmodelComponent,
    ProdectlistComponent,
    NewsfashionComponent,
    ArticleComponent,
    HomeComponent,
    HeaderComponent,
    SubscribeComponent,
    HomefooterComponent
  ],
  imports: [
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
