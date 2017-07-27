import { Component, OnInit } from '@angular/core';
import { Create } from './../create';
import { CreateService } from './../create.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DateObserveService } from './../date-observe.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newDate: Date;
  subscription: Subscription;
  newThing = new Create();
  errors = [];

  constructor(private _dateObserveService: DateObserveService , private _createService: CreateService, private _router: Router, private _route: ActivatedRoute) { 
    this.subscription = _dateObserveService.dateObservable.subscribe(
      (date) =>{ 
        this.newDate = date; 
        console.log("I've subscribed", this.newDate);
      },
      (err) =>{console.log(err);},
      () => {}
      )
  }

  ngOnInit() {
  }

  create() {
    this._createService.serviceCreate(this.newThing)
      .then( (success) => {
        this._router.navigate(['/dashboard'])
      })
      .catch( (err) => {
        this.errors = JSON.parse(err._body);
      })
  }

}
