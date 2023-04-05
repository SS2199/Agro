import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarosalComponent } from './carosal/carosal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarosalComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
