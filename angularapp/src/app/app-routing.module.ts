import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Routes } from '@angular/router';`

import { TemplateformComponent } from './templateform/templateform.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import { HttpComponent } from './http/http.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'form/:id',component:TemplateformComponent},
  {path:'home',component:HomeComponent},
  {path:'pipe',component:CrudComponent},
  {path:'http',component:HttpComponent},
  {path:'first',component:FirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
