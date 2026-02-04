import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { AppRoutingModule } from "./app-routing.module";
import { NabarComponent } from './components/shader/nabar/nabar.component';

import { HomeModule } from './pages/home/home.module';
import { HeroPageModule } from './pages/hero-page/hero-page.module';
import { DbzModule } from './pages/dbz/dbz.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    
    
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NabarComponent,
    HomeModule,
    HeroPageModule,
    DbzModule
],
// para evitar error al cargar en una ruta sea agrega LocationStrategy, HashLocationStrategy
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
