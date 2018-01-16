import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user/:id', component: UserComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);