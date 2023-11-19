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
import { ReadComponent } from './operation/read/read.component';
import { ReadByIdComponent } from './operation/read-by-id/read-by-id.component';
import { CreateComponent } from './operation/create/create.component';
import { UpdateComponent } from './operation/update/update.component';
import { DeleteComponent } from './operation/delete/delete.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'form/:id',component:TemplateformComponent,canActivate:[GuardGuard]},
  {path:'home',component:HomeComponent},
  {path:'pipe',component:CrudComponent},
  {path:'http',component:HttpComponent},
  {path:'first',component:FirstComponent},
  {path:'rform',component:ReactiveFormComponent},
  {path:'cform',component:CrudOperationsComponent},
  {path:'read',component:ReadComponent},
  {path:'read/:id',component:ReadByIdComponent},
  {path:'create',component:CreateComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'delete/:id',component:DeleteComponent}
  // {path:"token",component:TokendemoComponent},
  // {path:'https',component:SorryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
