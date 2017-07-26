import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { JournalService } from './journal/journal.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JournalComponent } from './journal/journal.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    JournalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule

  ],
  providers: [UserService, JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
