// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { NavHeaderComponent } from '../layouts/nav-header/nav-header.component';
import { NavSecondaryComponent } from '../layouts/nav-secondary/nav-secondary.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        NavHeaderComponent,
        NavSecondaryComponent
    ],
    exports: [
        RouterModule
    ]
})
export class HomeModule {

}
