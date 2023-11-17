import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import { CrudComponent } from './crud/crud.component';
// import { PiPipe } from './pi.pipe';
import { TdsPipe } from './pipe/tds.pipe';
import { TemplateformComponent } from './templateform/templateform.component';
import { HttpComponent } from './http/http.component';
import { HomeComponent } from './home/home.component';
import { ServicesService } from './services.service';
import { GuardGuard } from './guard.guard';
import { TokendemoComponent } from './tokendemo/tokendemo.component';
import { LifeComponent } from './life/life.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { WpracComponent } from './wprac/wprac.component';
// import { SorryComponent } from './sorry/sorry.component';
// import { AuthorizationComponent } from './authorization/authorization.component';
// import{Services}
import { BackendService } from './backend.service';
import { CrudOperationsComponent } from './crud-operations/crud-operations.component';
// import { BackendService } from './backend.service';

@NgModule({

  declarations: [ // contains component
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
    HomeComponent,
    TokendemoComponent,
    LifeComponent,
    ReactiveFormComponent,
    CrudOperationsComponent,
    // WpracComponent,
    // SorryComponent
    // AuthorizationComponent
  ],
  imports: [ //contains Module
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule,ServicesService,GuardGuard,BackendService], // contains services
  bootstrap: [AppComponent] //
})
export class AppModule { }
