import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule,Routes } from '@angular/router';
import { DashboardsComponent } from './dashboards/dashboards.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ComplaintPageComponent } from './complaint-page/complaint-page.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardsComponent,
    RegisterComponent,
    ComplaintPageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
