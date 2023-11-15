import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { home } from "./home"
// import { Routes } from '@angular/router';`

const routes: Routes = [
  {path:"",component:home}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
