import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { RegisterComponent } from './register/register.component';
import { ComplaintPageComponent } from './complaint-page/complaint-page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  {path:'dashboard',component:DashboardsComponent},
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'worker',component:ComplaintPageComponent},
  {path:'profile',component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
