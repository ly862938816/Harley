import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { boardStateReducer } from './core/board.reducer';
import { MaterialModule} from './material/material.module';




import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { RightScreenComponent } from './rightscreen/rightscreen.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SideNavComponent,
    RightScreenComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot({board: boardStateReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
