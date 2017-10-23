import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'app', component: AppComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
