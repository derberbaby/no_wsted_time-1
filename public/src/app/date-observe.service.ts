import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs';

@Injectable()
export class DateObserveService {

  constructor() { }

  dateObservable = new BehaviorSubject(new Date());

  newDate(date){
  	console.log("newDate invoked in service")
  	this.dateObservable.next(date);
  }

}
