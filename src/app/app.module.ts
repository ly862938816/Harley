import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { boardStateReducer } from './core/board.reducer';
import { MaterialModule} from './material/material.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.routing';




import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SubscribeComponent } from './layouts/subscribe/subscribe.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HomeModule,
    StoreModule.forRoot({board: boardStateReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
