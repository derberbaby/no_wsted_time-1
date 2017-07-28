import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { CreateService } from './../create.service';
import { UserService } from './../user.service';
import { Create } from './../create';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
	id;
	private sub: any;
	event: Create;
  friend;

  constructor(
  	private _userService: UserService,
  	private _createService: CreateService, 
  	private _router: Router,
  	private _route: ActivatedRoute ) { }

  ngOnInit() {
  	this.sub = this._route.params.subscribe(param=>
  		this.id = param
  	);

  	this.getEvent(this.id)
  }

  getEvent(eventID){
  	this._createService.serviceEventDetails(eventID)
  	.then( details => {
  		this.event = details;
  	})
  	.catch( err => {
  		console.log(err);
  	})
  }

  invite() {
    console.log("component", this.id);
    this._userService.serviceInviteFriend(this.id.id, this.friend)
    .then().catch();
  }

  saveEditable(value) {
    this._createService.serviceEditEvent(this.event)
    .then( data => {
      this.event = data;
    }).catch();
  }
}
