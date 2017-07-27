import { Component, OnInit } from '@angular/core';
import { Create } from './../create';
import { CreateService } from './../create.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
