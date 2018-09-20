import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminatePageComponent } from './terminate-page.component';

const routes: Routes = [
  {
      path: '',
      component: TerminatePageComponent
  }
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule],
  declarations: [TerminatePageComponent]
})
export class TerminatePageModule { }
