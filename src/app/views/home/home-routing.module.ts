import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', loadChildren: '../layouts/main/main.module#MainModule' },
            { path: 'main', loadChildren: '../layouts/main/main.module#MainModule' },
            { path: 'learning', loadChildren: '../layouts/learning/learning.module#LearningModule' },
            { path: 'blank-page', loadChildren: '../blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
]
})
export class HomeRoutingModule { }
