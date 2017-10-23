import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Restaurant } from '../restaurant/restaurant.component';
import { RestaurantMenu } from '../restaurantMenu/restaurantMenu.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


const appRoutes: Routes = [
    { path: 'Restaurant', component: Restaurant },
    { path: 'RestaurantMenu', component: RestaurantMenu },
];

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, Restaurant, RestaurantMenu],
    bootstrap: [AppComponent]
})
export class AppModule { }
