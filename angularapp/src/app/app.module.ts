import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import { CrudComponent } from './crud/crud.component';
// import { PiPipe } from './pi.pipe';
import { TdsPipe } from './pipe/tds.pipe';
import { TemplateformComponent } from './templateform/templateform.component';
import { HttpComponent } from './http/http.component';
import { SorryComponent } from './sorry/sorry.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NavbarComponent,
    SidebarComponent,
    FormComponent,
    CrudComponent,
    // PiPipe,
    TdsPipe,
    TemplateformComponent,
    HttpComponent,
    SorryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
