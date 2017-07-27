import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateObservableService } from './../date-observable.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	newDate: Date;
	subscription: Subscription;

  constructor(private _dateObservableService: DateObservableService) {
   }

  ngOnInit() {
    this.subscription = this._dateObservableService.observedDate.subscribe( (date) => { this.newDate = date})
  }



}
