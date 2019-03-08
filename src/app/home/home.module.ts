import { NgModule } from '@angular/core';
import { NewmodelComponent } from './newmodel/newmodel.component';
import { ProdectlistComponent } from './prodectlist/prodectlist.component';
import { NewsfashionComponent } from './newsfashion/newsfashion.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [NewmodelComponent, ProdectlistComponent, NewsfashionComponent, ArticleComponent, HomeComponent],
  imports: [
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
