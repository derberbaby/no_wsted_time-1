import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { JournalComponent } from './journal/journal.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main/login' },
  { path: 'main', component: LandingComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
  ]},
  { path: 'dashboard', component: DashboardComponent, children: [
  	{ path: 'calendar', component: CalendarComponent },
  	{ path: 'journal', component: JournalComponent }] },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
