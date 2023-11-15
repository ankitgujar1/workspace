import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Routes } from '@angular/router';`

import { TemplateformComponent } from './templateform/templateform.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:FirstComponent},
  {path:'form/:id',component:TemplateformComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
