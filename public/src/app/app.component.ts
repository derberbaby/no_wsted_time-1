import { Component, OnInit } from '@angular/core';
import { DateObserveService } from './date-observe.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private _dateObserveService: DateObserveService){
  }

  ngOnInit(){
  }


}
