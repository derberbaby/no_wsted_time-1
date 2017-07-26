import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class CreateService {

  constructor(private _http: Http) { }

  serviceCreate(newThing) {
    return this._http.post('/api/creates', newThing)
      .map( (response) => response.json())
      .toPromise()
  }

}
