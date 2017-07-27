import { Component, OnInit } from '@angular/core';
import { Create } from './../create';
import { CreateService } from './../create.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newDate: Date;
  newThing = new Create();
  errors = [];

  constructor(private _createService: CreateService, private _router: Router, private _route: ActivatedRoute) { 
    
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
