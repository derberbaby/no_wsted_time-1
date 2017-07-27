import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DateObserveService } from './../date-observe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	newDate: Date;
	subscription: Subscription;

  constructor(private _dateObserveService: DateObserveService) {
  	this.subscription = _dateObserveService.dateObservable.subscribe(
  		(spoongeBob) =>{ 
  			this.newDate = spoongeBob; 
  			console.log("I've subscribed", this.newDate);
  		},
  		(err) =>{console.log(err);},
  		() => {}
  		)
   }

  ngOnInit() {
  	this._dateObserveService.newDate(new Date());
  	// this.getCurrentObservableDate();
  }

  getCurrentObservableDate(){
  	this._dateObserveService.newDate(new Date());
  	this.newDate = this._dateObserveService.dateObservable.getValue();
  }

  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }
}
