import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Routes } from '@angular/router';`

import { FormComponent } from './form/form.component';
import { FirstComponent } from './first/first.component';


const routes: Routes = [
  {path:'',component:FirstComponent},
  {path:'form',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
