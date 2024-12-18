import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { GiftsComponent } from './gifts/gifts.component';
import { FooterComponent } from './footer/footer.component';
import { PlamComponent } from './plam/plam.component';
import { PotteryComponent } from './pottery/pottery.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GiftsComponent,
    FooterComponent,
    PlamComponent,
    PotteryComponent,
    WhoWeAreComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
