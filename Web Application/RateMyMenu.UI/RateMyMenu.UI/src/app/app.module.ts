import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Welcome } from '../welcome/welcome.component';
import { Restaurant } from '../restaurant/restaurant.component';
import { RestaurantMenu } from '../restaurantMenu/restaurantMenu.component';

const appRoutes: Routes = [
  { path: 'Home', component: Welcome },
  { path: 'Restaurant', component: Restaurant },
  { path: 'RestaurantMenu', component: RestaurantMenu },
  { path: '**', redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes), NgbModule.forRoot()],
    declarations: [AppComponent, Welcome, Restaurant, RestaurantMenu],
    bootstrap: [AppComponent]
})
export class AppModule { }
