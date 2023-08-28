import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PortafolioModule } from './portafolio/portafolio.module';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register()

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    PortafolioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
