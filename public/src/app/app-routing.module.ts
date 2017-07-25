import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main/login' },
  { path: 'main', component: LandingComponent, children: [
  	{ path: 'login', component: LoginComponent },
  	{ path: 'register', component: RegisterComponent }
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
