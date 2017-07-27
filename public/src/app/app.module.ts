import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { CreateService } from './create.service';
import { JournalService } from './journal.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JournalComponent } from './journal/journal.component';
import { CreateComponent } from './create/create.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { CalendarComponent } from './calendar/calendar.component';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import { EditComponent } from './edit/edit.component';
import { EventsComponent } from './events/events.component';

import { CommonModule } from '@angular/common';
import { DateObservableService } from './date-observable.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CreateComponent,
    JournalComponent,
    CalendarComponent,
    EditComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    InlineEditorModule
  ],
<<<<<<< HEAD

  providers: [UserService, CreateService, JournalService, DateObserveService],
=======
  providers: [UserService, CreateService, JournalService, DateObservableService],
>>>>>>> Added functioning observable
  bootstrap: [AppComponent],
  exports: [ CalendarComponent ]

})
export class AppModule { }
