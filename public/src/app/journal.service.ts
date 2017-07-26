import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class JournalService {

  constructor(private _http: Http) { }

  serviceCreateEntry(journalEntry) {
  	return this._http.post('/api/add_journal_entry', journalEntry).map( data => data.json()).toPromise();
  }
}
