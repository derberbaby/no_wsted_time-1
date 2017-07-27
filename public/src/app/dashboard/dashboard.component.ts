import { Component, OnInit, OnDestroy } from '@angular/core';
import { DateObservableService } from './../date-observable.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { User } from './../user';
import { UserService } from './../user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User;
  first_name;
  today = new Date;
	newDate;
	subscription: Subscription;

  constructor(private _dateObservableService: DateObservableService, private _userService: UserService) {
   }

  ngOnInit() {
    this.newDate = this.today;
    this._userService.serviceCheckSessionUser().then( (user) => {
      this.user = user;
      this.first_name = this.user.name.split(' ')[0]}).catch();
  }

  changedDate(clicked_date) {
    this.newDate = clicked_date.date;
  }

}
