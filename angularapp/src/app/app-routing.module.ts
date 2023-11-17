import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Routes } from '@angular/router';`

import { TemplateformComponent } from './templateform/templateform.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import { HttpComponent } from './http/http.component';
import { GuardGuard } from './guard.guard';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { TokendemoComponent } from './tokendemo/tokendemo.component';
// import { SorryComponent } from './sorry/sorry.component';
import { CrudOperationsComponent } from './crud-operations/crud-operations.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'form/:id',component:TemplateformComponent,canActivate:[GuardGuard]},
  {path:'home',component:HomeComponent},
  {path:'pipe',component:CrudComponent},
  {path:'http',component:HttpComponent},
  {path:'first',component:FirstComponent},
  {path:'rform',component:ReactiveFormComponent},
  {path:'cform',component:CrudOperationsComponent}
  // {path:"token",component:TokendemoComponent},
  // {path:'https',component:SorryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
