import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './guard/auth.guard';
import {PathLocationStrategy, Location, LocationStrategy} from '@angular/common';

const appRoutes: Routes = [
  { path: "", loadChildren: './views/home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: "home", loadChildren: './views/home/home.module#HomeModule' },
  { path: "blank-page", loadChildren: './views/blank-page/blank-page.module#BlankPageModule' },
  { path: "not-found", loadChildren: './views/page-not-found/page-not-found.module#PageNotFoundModule' },
  { path: "**", redirectTo: "not-found"}
];

/* const appRoutes: Routes = [
  { path: "", component: MainComponent, canActivate: [AuthGuard] },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "not-found"}
]; */

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class AppRoutingModule { }
