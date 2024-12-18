import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GiftsComponent } from './gifts/gifts.component';
import { PlamComponent } from './plam/plam.component';
import { PotteryComponent } from './pottery/pottery.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: "Home"}},
  {path: 'gifts', component: GiftsComponent, data: {title: "Gifts"}},
  {path: 'plam', component: PlamComponent, data: {title: "Plam"}},
  {path: 'pottery', component: PotteryComponent, data: {title: "Pottery"}},
  {path: 'who-we-are', component: WhoWeAreComponent, data: {title: "Who We Are"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
