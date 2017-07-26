import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
	user : User;
	user_id: any;
	errors = [];
	tasks: Array<any>;

	constructor(private _userService : UserService) { }

  	ngOnInit() {
		this._userService.serviceCheckSessionUser()
			.then( user => {
				this.user_id = user._id
			})
			.catch ( err => {
				this.errors = JSON.parse(err._body)
			})
  	}

  	createTask(){
  		this._userService.serviceCreateTask(this.user_id)
  			.then( savedTask => {
  				this.user.tasks.push(savedTask);
  			})
  			.catch( err =>{
  				this.errors = JSON.parse(err._body);
  			})
	}
		
	getTasks(){
		this._userService.serviceGetTasks()
		.then ( user => {
			this.tasks = user.tasks
		})
		.catch( err => {
			this.errors = JSON.parse(err._body)
		})
	}

}
