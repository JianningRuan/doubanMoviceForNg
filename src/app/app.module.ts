import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { NavBarComponent } from './view/nav-bar/nav-bar.component';
import { HotComponent } from './view/hot/hot.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './view/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    HotComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
