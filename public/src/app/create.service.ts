import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class CreateService {

  constructor(private _http: Http) { }

  serviceCreate(newThing) {
    return this._http.post('/api/create', newThing)
      .map( (response) => response.json())
      .toPromise()
  }

  serviceGetEvents(date){
  	console.log("IN CREATE SERVICE", date);
  	return this._http.post('/api/getEvents', date)
  		.map ( (response) => response.json())
      .toPromise()
  }

  serviceEventDetails(eventID){
  	return this._http.get('/api/details/'+ eventID.id)
  		.map ( (response) => response.json())
      .toPromise()
  }

  serviceEditEvent(event) {
    console.log("SERVICE", event);
    return this._http.post('/api/edit/', event)
    .map( (response) => response.json())
    .toPromise()
  }
}
